import { StyledTerminal } from './StyledTerminal';
import { useRef, useState } from 'react';

type Line = {
  key: number;
  message: string;
  self?: boolean;
};

const Terminal = (): JSX.Element => {
  const [lines, setLines] = useState<Line[]>([]);
  const handleUserInput = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter') {
      return;
    }

    event.preventDefault();
    const target = event.target as HTMLElement;
    setLines([...lines, { message: target.innerText, key: lines.length, self: true }]);
    target.innerText = '';
  };
  const userInputRef = useRef<HTMLDivElement | null>(null);
  return (
    <StyledTerminal onClick={() => userInputRef?.current?.focus()}>
      <div>
        {lines.map(({ key, message }) => (
          <div key={key}>{message}</div>
        ))}
      </div>
      <div className="userInput">
        $
        <span
          role="textbox"
          tabIndex="0"
          contentEditable
          onKeyDown={handleUserInput}
          ref={userInputRef}
        />
      </div>
    </StyledTerminal>
  );
};

export default Terminal;
