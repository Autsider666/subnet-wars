import { getRange, isValidIPItemValue } from 'components/apps/NetworkScanner/IpInput/functions';
import StyledIpInput from 'components/apps/NetworkScanner/IpInput/StyledIpInput';
import { ChangeEvent, KeyboardEvent, ClipboardEvent, useState, useRef } from 'react';

const IpInput = ({ onChange }: { onChange: (ip: string) => void }): JSX.Element => {
  const [ip, setIp] = useState<string>('...');
  const inputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const getIpSegments = (value: string = ip): string[] => value.split('.');

  const changeIp = (newIpSegment: number | string, i: number): void => {
    const newIpSegments: (number | string)[] = getIpSegments();
    newIpSegments[i] = newIpSegment;
    const newIp = newIpSegments
      .map((ipSegment) => (Number.isNaN(ipSegment) ? '' : ipSegment))
      .join('.');
    onChange(newIp);
    setIp(newIp);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>, i: number): void => {
    const target = event.target;
    let newValue = parseInt(target.value) || '';
    if (newValue !== '' && !isValidIPItemValue(newValue)) {
      newValue = 255;
    }

    changeIp(newValue, i);

    if (!Number.isNaN(newValue) && String(newValue).length === 3 && i < 3) {
      inputRefs[i + 1].current?.focus();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, i: number): void => {
    let domId = i;
    const target = event.target as HTMLInputElement;
    if (
      (event.key === 'ArrowLeft' || event.key === 'Backspace') &&
      getRange(target).end === 0 &&
      i > 0
    ) {
      domId = i - 1;
    }
    if (event.key === 'ArrowRight' && getRange(target).end === target.value.length && i < 3) {
      domId = i + 1;
    }
    if (event.key === '.') {
      event.preventDefault();
      if (i < 3) {
        domId = i + 1;
      }
    }
    inputRefs[domId].current?.focus();
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>, i: number): void => {
    if (!event.clipboardData || !event.clipboardData.getData) {
      return;
    }

    const pasteData = event.clipboardData.getData('text/plain');
    if (!pasteData) {
      return;
    }

    const value = getIpSegments(pasteData).map((v) => parseInt(v));
    if (value.length !== 4 - i) {
      return;
    }

    if (!value.every(isValidIPItemValue)) {
      return;
    }

    value.forEach((val, j) => {
      changeIp(val, i + j);
    });

    return event.preventDefault();
  };

  return (
    <StyledIpInput>
      {getIpSegments().map((ipSegment, i) => (
        <div key={i}>
          <input
            ref={inputRefs[i]}
            type="text"
            value={Number.isNaN(ipSegment) ? '' : ipSegment}
            onChange={(event) => handleChange(event, i)}
            onKeyDown={(event) => handleKeyDown(event, i)}
            onPaste={(event) => handlePaste(event, i)}
          />
          {i !== 3 ? <i>.</i> : false}
        </div>
      ))}
    </StyledIpInput>
  );
};

export default IpInput;
