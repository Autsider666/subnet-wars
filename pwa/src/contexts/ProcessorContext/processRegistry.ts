import { Processes } from 'contexts/ProcessorContext/types';
import { lazy } from 'react';
import {
  AttackerIcon,
  DirectoryIcon,
  PortManagerIcon,
  PortScannerIcon,
  ReaderIcon,
  ScanIcon,
} from 'styles/icons/general';

const processRegistry: Processes = {
  FileExplorer: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileExplorer')),
    icon: DirectoryIcon,
    title: 'File Explorer',
  },
  NetworkScanner: {
    backgroundColor: '#61892F',
    Component: lazy(() => import('components/apps/NetworkScanner')),
    icon: ScanIcon,
    title: 'Network Scanner',
  },
  Attacker: {
    backgroundColor: '#61892F',
    Component: lazy(() => import('components/apps/Attacker')),
    icon: AttackerIcon,
    title: 'Attacker',
  },
  FileReader: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/FileReader')),
    icon: ReaderIcon,
    title: 'File reader',
  },
  PortManager: {
    backgroundColor: 'dimgrey',
    Component: lazy(() => import('components/apps/PortManager')),
    icon: PortManagerIcon,
    title: 'Port Manager',
  },
  PortScanner: {
    backgroundColor: '#202020',
    Component: lazy(() => import('components/apps/PortScanner')),
    icon: PortScannerIcon,
    title: 'Port Scanner',
  },
};

export default processRegistry;
