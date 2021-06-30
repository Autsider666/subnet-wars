import StyledStartButton from './StyledStartButton';
import WindowsIcon from './WindowsIcon';
import { useContext } from 'react';
import SystemContext from '../../../../../contexts/SystemContext';

const StartButton = (): JSX.Element => {
  const { showStartMenu, toggleStartMenu } = useContext(SystemContext);

  return (
    <StyledStartButton active={showStartMenu} title="Start" onClick={() => toggleStartMenu()}>
      <WindowsIcon />
    </StyledStartButton>
  );
};

export default StartButton;
