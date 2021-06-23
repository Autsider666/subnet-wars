import StyledTitleBar from './StyledTitleBar';
import Button from '../../../../styles/common/Button';
import { CloseIcon, MaximizedIcon, MaximizeIcon, MinimizeIcon } from './TitleBarActionIcons';

type TitleBarProps = {
  title: string;
};

const TitleBar = ({ title }: TitleBarProps): JSX.Element => {
  const maximized = true;
  return (
    <StyledTitleBar className="handle" foreground={true}>
      <h1>
        <figure>
          <figcaption>{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button className="minimize" title="Minimize">
          <MinimizeIcon />
        </Button>
        <Button className="maximize" title="Maximize">
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button className="close" title="Close">
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default TitleBar;
