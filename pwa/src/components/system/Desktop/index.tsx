import StyledDesktop from './StyledDesktop';
import TaskBar from './Taskbar';
import { FileArray, FileBrowser, FileList } from 'chonky';

import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

setChonkyDefaults({ iconComponent: ChonkyIconFA });

const files: FileArray = [
  { id: 'lht', name: 'Projects', isDir: true },
  {
    id: 'mcd',
    name: 'chonky-sphere-v2.png',
    thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
  },
];
const Desktop = (): JSX.Element => (
  <StyledDesktop>
    <FileBrowser files={files}>
      <FileList />
    </FileBrowser>
    <TaskBar />
  </StyledDesktop>
);

export default Desktop;
