import { Processes } from 'contexts/processor/types';
import { lazy } from 'react';
import { DirectoryIcon } from 'styles/icons/general';

const processRegistry: Processes = {
  FileExplorer: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileExplorer')),
    icon: DirectoryIcon,
    title: 'File Explorer',
  },
};

export default processRegistry;
