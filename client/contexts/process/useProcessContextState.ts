import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess,
  setProcessElement,
  setTitle,
} from './functions';
import type { ProcessContextState, ProcessElements, Processes } from './types';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = useState<Processes>({
    Console: {
      backgroundColor: '#202020',
      Component: dynamic(() => import('../../components/apps/Console')),
      icon: '/icons/console.png',
      title: 'Console',
    },
  });
  const close = useCallback(
    (id: string, closing?: boolean) => setProcesses(closeProcess(id, closing)),
    []
  );
  const maximize = useCallback((id: string) => setProcesses(maximizeProcess(id)), []);
  const minimize = useCallback((id: string) => setProcesses(minimizeProcess(id)), []);
  const open = useCallback((id: string, url: string) => setProcesses(openProcess(id, url)), []);
  const linkElement = useCallback(
    (id: string, name: keyof ProcessElements, element: HTMLElement) =>
      setProcesses(setProcessElement(id, name, element)),
    []
  );
  const title = useCallback(
    (id: string, newTitle: string) => setProcesses(setTitle(id, newTitle)),
    []
  );

  return {
    close,
    linkElement,
    maximize,
    minimize,
    open,
    processes,
    title,
  };
};

export default useProcessContextState;
