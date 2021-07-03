import { cascadePosition, centerPosition } from 'components/system/Window/functions';
import type { Size } from 'components/system/Window/RndWindow/useResizable';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';

import { Dispatch, SetStateAction, useState } from 'react';
import type { Position } from 'react-rnd';
import { useTheme } from 'styled-components';
import { DEFAULT_WINDOW_POSITION } from 'utils/constants';

type Draggable = [Position, Dispatch<SetStateAction<Position>>];

const useDraggable = (id: string, size: Size): Draggable => {
  const {
    sizes: {
      taskbar: { height: taskbarHeight },
      window: { cascadeOffset },
    },
  } = useTheme();
  const { processes } = useProcessor();
  const {
    stackOrder,
    windowStates: { [id]: windowState },
  } = useSystem();
  const { position } = windowState || {};
  const [{ x, y }, setPosition] = useState<Position>(
    position ||
      cascadePosition(id, processes, stackOrder, cascadeOffset) ||
      centerPosition(size, taskbarHeight) ||
      DEFAULT_WINDOW_POSITION
  );

  return [{ x, y }, setPosition];
};

export default useDraggable;
