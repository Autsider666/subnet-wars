import StyledDesktop from 'components/system/Desktop/StyledDesktop';
import TaskBar from 'components/system/TaskBar';
import FileView from 'components/system/Files/FileView';
import AppsLoader from 'components/system/Apps/AppsLoader';

const Desktop = (): JSX.Element => (
  <StyledDesktop>
    <FileView url={'/desktop'} />
    <TaskBar />
    <AppsLoader />
  </StyledDesktop>
);

export default Desktop;
