import { NextPage } from 'next';
import Desktop from '../components/system/Desktop';
import Taskbar from '../components/system/TaskBar';
import AppsLoader from '../components/system/Apps/AppsLoader';
import { SessionConsumer } from '../contexts/session';

const Index: NextPage = () => (
  <SessionConsumer>
    {({ taskBarVisible }) => (
      <Desktop>
        {taskBarVisible && <Taskbar />}
        <AppsLoader />
      </Desktop>
    )}
  </SessionConsumer>
);

export default Index;
