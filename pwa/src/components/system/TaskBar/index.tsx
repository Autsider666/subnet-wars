import TaskBarEntries from 'components/system/TaskBar/TaskBarEntries';
import Clock from 'components/system/TaskBar/Clock';
import StartButton from 'components/system/TaskBar/StartButton';
import StyledTaskBar from 'components/system/TaskBar/StyledTaskBar';
import { useSystem } from 'contexts/SystemContext';
import StartMenu from 'components/system/StartMenu';

const TaskBar = (): JSX.Element => {
  const { showStartMenu } = useSystem();

  return (
    <>
      {showStartMenu && <StartMenu />}
      <StyledTaskBar tabIndex={-1}>
        <StartButton />
        <TaskBarEntries />
        <Clock />
      </StyledTaskBar>
    </>
  );
};

export default TaskBar;
