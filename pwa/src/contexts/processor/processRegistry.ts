import { Processes } from 'contexts/processor/types';
import { lazy } from 'react';
import { DirectoryIcon, ScanIcon } from 'styles/icons/general';

const processRegistry: Processes = {
  FileExplorer: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileExplorer')),
    icon: DirectoryIcon,
    title: 'File Explorer',
  },
  NetworkScanner: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/NetworkScanner')),
    icon: ScanIcon,
    title: 'Network Scanner',
  },
};

export default processRegistry;
