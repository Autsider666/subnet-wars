import { closeWithTransition } from 'components/system/Window/functions';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';

type WindowActions = {
  onClose: () => void;
  onMaximize: () => void;
  onMinimize: () => void;
};

const useWindowActions = (id: string): WindowActions => {
  const nextFocusableId = useNextFocusable(id);
  const { setForegroundId, removeFromStack } = useSystem();
  const { close, maximize, minimize } = useProcessor();
  const onMinimize = (): void => {
    minimize(id);
    setForegroundId(nextFocusableId);
  };
  const onMaximize = (): void => maximize(id);
  const onClose = (): void => {
    removeFromStack(id);
    closeWithTransition(close, id);
    setForegroundId(nextFocusableId);
  };

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
