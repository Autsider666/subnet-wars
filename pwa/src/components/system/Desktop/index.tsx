import StyledDesktop from './StyledDesktop';
import TaskBar from './Taskbar';
import FileView from '../Files/FileView';

const Desktop = (): JSX.Element => (
  <StyledDesktop>
    <FileView url={'/desktop'} />
    <TaskBar />
  </StyledDesktop>
);

export default Desktop;
