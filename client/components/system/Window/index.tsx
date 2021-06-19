import type { ComponentProcessProps } from '../Apps/RenderComponent';
// import RndWindow from './RndWindow';
import StyledWindow from './StyledWindow';
import TitleBar from './TitleBar';
// import useFocusable from './useFocusable';
// import useWindowTransitions from './useWindowTransitions';
import { useProcesses } from '../../../contexts/process';
import { useSession } from '../../../contexts/session';
import { ReactNode, useRef } from 'react';

type WindowProps = ComponentProcessProps & {
  children: ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: { [id]: { backgroundColor = '' } = {} },
  } = useProcesses();
  const { foregroundId, titleBarVisible } = useSession();
  const isForeground = id === foregroundId;
  const windowRef = useRef<HTMLElement | null>(null);
  // const { zIndex, ...focusableProps } = useFocusable(id, windowRef);
  // const windowTransitions = useWindowTransitions(id, windowRef);

  return (
    // <RndWindow id={id} style={{ zIndex }}>
    <StyledWindow foreground={isForeground} ref={windowRef} style={{ backgroundColor }}>
      {titleBarVisible && <TitleBar id={id} />}
      {children}
    </StyledWindow>
    // </RndWindow>
  );
};

export default Window;
