import { Processes } from 'contexts/ProcessorContext/types';
import { lazy } from 'react';
import { DirectoryIcon, ReaderIcon, ScanIcon } from 'styles/icons/general';

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
  FileReader: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileReader')),
    icon: ReaderIcon,
    title: 'File reader',
  },
};

export default processRegistry;
