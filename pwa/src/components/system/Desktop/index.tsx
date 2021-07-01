import StyledDesktop from './StyledDesktop';
import TaskBar from './Taskbar';
import FileView from '../Files/FileView';
import AppsLoader from '../Apps/AppsLoader';

const Desktop = (): JSX.Element => (
  <StyledDesktop>
    <FileView url={'/desktop'} />
    <AppsLoader />
    <TaskBar />
  </StyledDesktop>
);

export default Desktop;
