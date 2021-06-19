import { NextPage } from 'next';
import Desktop from '../components/systems/Desktop';
import Taskbar from '../components/systems/TaskBar';

const Index: NextPage = () => {
  return (
    <Desktop>
      <Taskbar />
    </Desktop>
  );
};

export default Index;
