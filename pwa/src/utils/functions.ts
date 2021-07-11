import { MouseEventHandler } from 'react';
import { TRANSITIONS_IN_MILLISECONDS } from 'utils/constants';

export const pxToNum = (value: string | number = 0): number => {
  if (typeof value !== 'string') return value;
  const matchedValue = value.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
  return matchedValue ? parseFloat(value) : Number(value);
};

export const doubleClick = (
  handler: MouseEventHandler,
  singleClick = false,
  timeout = TRANSITIONS_IN_MILLISECONDS.DOUBLE_CLICK
): MouseEventHandler => {
  let timer: NodeJS.Timeout | undefined;

  return (event) => {
    const runHandler = () => {
      event.stopPropagation();
      handler(event);
    };
    const clearTimer = () => {
      timer = undefined;
    };

    if (singleClick) {
      runHandler();
    } else if (typeof timer === 'undefined') {
      timer = setTimeout(clearTimer, timeout);
    } else {
      clearTimeout(timer);
      runHandler();
      clearTimer();
    }
  };
};
