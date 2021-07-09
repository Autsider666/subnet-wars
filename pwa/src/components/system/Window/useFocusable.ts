import { FocusEventHandler, FocusEvent, useCallback, useEffect } from 'react';
import { useSystem } from 'contexts/SystemContext';
import { useProcessor } from 'contexts/ProcessorContext';

type Events = {
  onBlur: (event: FocusEvent<HTMLElement>) => void;
  onFocus: (event?: FocusEvent<HTMLElement>) => void;
};

type Focusable = Events & {
  tabIndex: number;
  zIndex: number;
};

const useFocusable = (id: string, callbackEvents?: Partial<Events>): Focusable => {
  const { foregroundId, prependToStack, setForegroundId, stackOrder } = useSystem();
  const {
    processes: { [id]: process },
  } = useProcessor();
  const { componentWindow, minimized, taskbarEntry, url } = process || {};
  const zIndex = stackOrder.length + (minimized ? 1 : -stackOrder.indexOf(id)) + 1;
  const isForeground = id === foregroundId;
  const onBlur: FocusEventHandler<HTMLElement> = (event) => {
    const { relatedTarget } = event;

    if (isForeground && relatedTarget !== taskbarEntry) setForegroundId('');

    callbackEvents?.onBlur?.(event);
  };
  const moveToFront = useCallback(
    (event?: FocusEvent<HTMLElement>) => {
      const { relatedTarget } = event || {};

      if (componentWindow?.contains(document.activeElement)) {
        prependToStack(id);
        setForegroundId(id);
      } else if (!relatedTarget || document.activeElement === taskbarEntry) {
        componentWindow?.focus();
        callbackEvents?.onFocus?.(event);
      }
    },
    [callbackEvents, componentWindow, id, prependToStack, setForegroundId, taskbarEntry]
  );

  useEffect(() => {
    if (isForeground) moveToFront();
  }, [isForeground, moveToFront]);

  useEffect(() => {
    if (process && !process.closing) setForegroundId(id);
  }, [id, process, setForegroundId, url]);

  return {
    onBlur,
    onFocus: moveToFront,
    tabIndex: -1,
    zIndex,
  };
};

export default useFocusable;
