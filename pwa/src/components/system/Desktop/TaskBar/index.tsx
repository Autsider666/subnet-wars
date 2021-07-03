import TaskBarEntries from 'components/system/Desktop/TaskBar/TaskBarEntries';
import Clock from 'components/system/Desktop/TaskBar/Clock';
import StartButton from 'components/system/Desktop/TaskBar/StartButton';
import StyledTaskBar from 'components/system/Desktop/TaskBar/StyledTaskBar';
import { useSystem } from 'contexts/SystemContext';
import StartMenu from 'components/system/Desktop/StartMenu';

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
