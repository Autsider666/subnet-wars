import StyledStartButton from 'components/system/Desktop/TaskBar/StartButton/StyledStartButton';
import WindowsIcon from 'components/system/Desktop/TaskBar/StartButton/WindowsIcon';
import { useSystem } from 'contexts/SystemContext';

const StartButton = (): JSX.Element => {
  const { showStartMenu, toggleStartMenu } = useSystem();

  return (
    <StyledStartButton active={showStartMenu} title="Start" onClick={() => toggleStartMenu()}>
      <WindowsIcon />
    </StyledStartButton>
  );
};

export default StartButton;
