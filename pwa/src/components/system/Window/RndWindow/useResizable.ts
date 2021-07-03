import { useSystem } from 'contexts/SystemContext';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import type { Props } from 'react-rnd';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, Dispatch<SetStateAction<Size>>];

const useResizable = (id: string, autoSizing = false): Resizable => {
  const {
    windowStates: { [id]: { size = DEFAULT_WINDOW_SIZE } = {} },
  } = useSystem();
  const [{ height, width }, setSize] = useState<Size>(size);

  useEffect(() => {
    if (autoSizing) setSize(size);
  }, [autoSizing, size]);

  return [{ height, width }, setSize];
};

export default useResizable;
