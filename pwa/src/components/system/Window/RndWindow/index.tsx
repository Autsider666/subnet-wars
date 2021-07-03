import useRnd from 'components/system/Window/RndWindow/useRnd';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';
import { ReactNode, useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';

type RndWindowProps = {
  children: ReactNode;
  id: string;
  zIndex: number;
};

const reRouteFocus =
  (focusElement?: HTMLElement) =>
  (element?: Element): void => {
    element?.setAttribute('tabindex', '-1');
    element?.addEventListener('mousedown', (event) => {
      event.preventDefault();
      focusElement?.focus();
    });
  };

const RndWindow = ({ children, id, zIndex }: RndWindowProps): JSX.Element => {
  const {
    linkElement,
    processes: { [id]: process },
  } = useProcessor();
  const { closing, componentWindow, maximized, minimized } = process || {};
  const rndRef = useRef<Rnd | null>(null);
  const rndProps = useRnd(id, maximized);
  const { setWindowStates } = useSystem();

  useEffect(() => {
    const { current: currentWindow } = rndRef || {};
    const rndWindowElements = currentWindow?.resizableElement?.current?.children || [];
    const [windowContainer, resizeHandleContainer] = rndWindowElements as HTMLElement[];
    const resizeHandles = Array.from(resizeHandleContainer?.children || []);

    resizeHandles.forEach(reRouteFocus(windowContainer));

    if (process && !componentWindow && windowContainer) {
      linkElement(id, 'componentWindow', windowContainer);
    }

    return () => {
      if (closing) {
        setWindowStates((currentWindowStates) => ({
          ...currentWindowStates,
          [id]: {
            position: currentWindow?.props?.position,
            size: currentWindow?.props?.size,
          },
        }));
      }
    };
  }, [closing, componentWindow, id, linkElement, maximized, process, setWindowStates]);

  return (
    <Rnd
      ref={rndRef}
      style={{
        pointerEvents: minimized ? 'none' : 'all',
        zIndex,
      }}
      {...rndProps}
    >
      {children}
    </Rnd>
  );
};

export default RndWindow;
