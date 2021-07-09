import StyledPeekWindow from 'components/system/Desktop/TaskBar/TaskBarEntry/Peek/StyledPeekWindow';
import useWindowActions from 'components/system/Window/TitleBar/useWindowActions';
import { CloseIcon } from 'components/system/Window/TitleBar/WindowActionIcons';
import { useProcessor } from 'contexts/ProcessorContext';
import Button from 'styles/common/Button';

type PeekWindowProps = {
  id: string;
  image: string;
};

const PeekWindow = ({ id, image }: PeekWindowProps): JSX.Element => {
  const {
    processes: { [id]: { title = id } = {} },
  } = useProcessor();
  const { onClose } = useWindowActions(id);

  return (
    <StyledPeekWindow>
      <img alt={title} src={image} />
      <Button onClick={onClose} title="Close">
        <CloseIcon />
      </Button>
    </StyledPeekWindow>
  );
};

export default PeekWindow;
