import { MouseEventHandler, useRef } from 'react';
import { DOUBLE_CLICK_TIMEOUT_IN_MILLISECONDS } from 'utils/constants';

type DoubleClick = (
  handler: MouseEventHandler,
  singleClick?: boolean,
  timeout?: number
) => MouseEventHandler;

const useDoubleClick: DoubleClick = (
  handler,
  singleClick = false,
  timeout = DOUBLE_CLICK_TIMEOUT_IN_MILLISECONDS
) => {
  const timer = useRef<NodeJS.Timeout>();

  return (event) => {
    const runHandler = (): void => {
      event.stopPropagation();
      handler(event);
    };

    if (singleClick) {
      runHandler();
    } else if (!timer.current) {
      timer.current = setTimeout(() => {
        timer.current = undefined;
      }, timeout);
    } else {
      clearTimeout(timer.current);
      runHandler();
      timer.current = undefined;
    }
  };
};

export default useDoubleClick;