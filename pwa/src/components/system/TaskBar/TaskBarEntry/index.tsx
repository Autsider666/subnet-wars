import useWindowPeek from 'components/system/TaskBar/TaskBarEntry/Peek/useWindowPeek';
import StyledTaskBarEntry from 'components/system/TaskBar/TaskBarEntry/StyledTaskBarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcessor } from 'contexts/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';
import { useCallback } from 'react';
import Button from 'styles/common/Button';

type TaskBarEntryProps = {
  icon: () => JSX.Element;
  id: string;
  title: string;
};

const TaskBarEntry = ({ id, title, icon }: TaskBarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(id);
  const { foregroundId, setForegroundId } = useSystem();
  const isForeground = id === foregroundId;
  const {
    linkElement,
    minimize,
    processes: { [id]: { minimized = false } = {} },
  } = useProcessor();
  const linkTaskBarEntry = useCallback(
    (taskbarEntry: HTMLButtonElement) =>
      taskbarEntry && linkElement(id, 'taskbarEntry', taskbarEntry),
    [id, linkElement]
  );
  const onClick = (): void => {
    if (minimized || isForeground) {
      minimize(id);
    }

    setForegroundId(isForeground ? nextFocusableId : id);
  };
  const { PeekComponent, peekEvents } = useWindowPeek(id);

  return (
    <StyledTaskBarEntry foreground={isForeground} title={title} {...peekEvents}>
      {PeekComponent && <PeekComponent />}
      <Button onClick={onClick} ref={linkTaskBarEntry}>
        <figure>
          {icon()}
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskBarEntry>
  );
};

export default TaskBarEntry;
