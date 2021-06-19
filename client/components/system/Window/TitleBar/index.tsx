// import useDoubleClick from 'components/system/useDoubleClick';
import StyledTitleBar from './StyledTitleBar';
import useWindowActions from './useWindowActions';
import { CloseIcon, MaximizedIcon, MaximizeIcon, MinimizeIcon } from './WindowActionIcons';
import { useProcesses } from '../../../../contexts/process';
import { useSession } from '../../../../contexts/session';
import Button from '../../../../styles/common/Button';
// import Icon from 'styles/common/Icon';

type TitleBarProps = {
  id: string;
};

const TitleBar = ({ id }: TitleBarProps): JSX.Element => {
  const {
    processes: {
      [id]: {
        autoSizing = false,
        // icon = '',
        lockAspectRatio = false,
        title = '',
        maximized = false,
      } = {},
    },
  } = useProcesses();
  const { foregroundId } = useSession();
  const isForeground = id === foregroundId;
  const { onClose, onMaximize, onMinimize } = useWindowActions(id);
  const isMaximizable = autoSizing && !lockAspectRatio;

  return (
    <StyledTitleBar className="handle" foreground={isForeground}>
      {/*<h1 onClick={useDoubleClick(isMaximizable ? () => undefined : onMaximize)}>*/}
      <h1>
        <figure>
          {/*<Icon src={icon} alt={title} onClick={useDoubleClick(onClose)} imgSize={16} />*/}
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button className="minimize" onClick={onMinimize} title="Minimize">
          <MinimizeIcon />
        </Button>
        <Button className="maximize" disabled={isMaximizable} onClick={onMaximize} title="Maximize">
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