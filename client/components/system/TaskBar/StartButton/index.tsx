import StyledStartButton from './StyledStartButton';
import StartButtonIcon from './StartButtonIcon';
import { useSession } from '../../../../contexts/session';

const StartButton = (): JSX.Element => {
  const { startMenuVisible, toggleStartMenu } = useSession();

  return (
    <StyledStartButton active={startMenuVisible} title="Start" onClick={() => toggleStartMenu()}>
      <StartButtonIcon />
    </StyledStartButton>
  );
};

export default StartButton;
