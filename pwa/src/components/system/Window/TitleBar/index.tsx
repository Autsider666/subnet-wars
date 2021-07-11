import StyledTitleBar from 'components/system/Window/TitleBar/StyledTitleBar';
import useWindowActions from 'components/system/Window/TitleBar/useWindowActions';
import {
  CloseIcon,
  MaximizedIcon,
  MaximizeIcon,
  MinimizeIcon,
} from 'components/system/Window/TitleBar/WindowActionIcons';
import { useProcessor } from 'contexts/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';
import Button from 'styles/common/Button';
import { doubleClick } from 'utils/functions';

type TitleBarProps = {
  id: string;
};

const TitleBar = ({ id }: TitleBarProps): JSX.Element => {
  const {
    processes: {
      [id]: {
        autoSizing = false,
        icon = () => <div>Loading...</div>,
        lockAspectRatio = false,
        title = '',
        maximized = false,
      } = {},
    },
  } = useProcessor();
  const { foregroundId } = useSystem();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize, onMinimize } = useWindowActions(id);
  const disableMaximize = autoSizing && !lockAspectRatio;

  return (
    <StyledTitleBar className="handle" foreground={isForeground}>
      <Button as="h1" onClick={disableMaximize ? undefined : doubleClick(onMaximize)}>
        <figure>
          {icon()}
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
      <nav className="cancel">
        <Button className="minimize" onClick={onMinimize} title="Minimize">
          <MinimizeIcon />
        </Button>
        <Button
          className="maximize"
          disabled={disableMaximize}
          onClick={onMaximize}
          title="Maximize"
        >
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button className="close" onClick={onClose} title="Close">
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default TitleBar;
