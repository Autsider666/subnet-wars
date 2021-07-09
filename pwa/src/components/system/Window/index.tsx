import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import RndWindow from 'components/system/Window/RndWindow';
import StyledWindow from 'components/system/Window/StyledWindow';
import TitleBar from 'components/system/Window/TitleBar';
import useFocusable from 'components/system/Window/useFocusable';
import useWindowTransitions from 'components/system/Window/useWindowTransitions';
import { useProcessor } from 'contexts/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';
import { ReactNode } from 'react';

type WindowProps = ComponentProcessProps & {
  children: ReactNode;
};

const Window = ({ children, id }: WindowProps): JSX.Element => {
  const {
    processes: { [id]: { backgroundColor = '' } = {} },
  } = useProcessor();
  const { foregroundId } = useSystem();
  const isForeground = id === foregroundId;
  const { zIndex, ...focusableProps } = useFocusable(id);
  const windowTransitions = useWindowTransitions(id);

  return (
    <RndWindow id={id} zIndex={zIndex}>
      <StyledWindow
        foreground={isForeground}
        style={{ backgroundColor }}
        {...focusableProps}
        {...windowTransitions}
      >
        <TitleBar id={id} />
        {children}
      </StyledWindow>
    </RndWindow>
  );
};

export default Window;
