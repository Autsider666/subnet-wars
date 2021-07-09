import { useSystem } from 'contexts/SystemContext';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { Props } from 'react-rnd';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, Dispatch<SetStateAction<Size>>];

const useResizable = (id: string, autoSizing = false): Resizable => {
  const defaultWindowSize: Size = {
    height: Math.round(document.documentElement.clientHeight * 0.5) + 'px',
    width: Math.round(document.documentElement.clientWidth * 0.5) + 'px',
  };
  const {
    windowStates: { [id]: { size = defaultWindowSize } = {} },
  } = useSystem();
  const [{ height, width }, setSize] = useState<Size>(size);

  useEffect(() => {
    if (autoSizing) setSize(size);
  }, [autoSizing, size]);

  return [{ height, width }, setSize];
};

export default useResizable;
