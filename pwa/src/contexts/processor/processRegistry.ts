import { Processes } from 'contexts/processor/types';
import { lazy } from 'react';

const processRegistry: Processes = {
  FileExplorer: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileExplorer')),
    icon: '/icons/explorer.png',
    title: 'File Explorer',
  },
};

export default processRegistry;
