import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Processes, ProcessElement } from 'contexts/processor/types';
import {
  changeProcessUrl,
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess,
  setProcessElement,
  setTitle,
} from 'contexts/processor/functions';

export interface ProcessorFunctions {
  title: (id: string, newTitle: string) => void;
  processes: Processes;
  open: (id: string, url: string) => void;
  close: (id: string, closing?: boolean) => void;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  changeUrl: (id: string, url: string) => void;
  linkElement: (id: string, name: keyof ProcessElement, element: HTMLElement) => void;
}

const ProcessorContext = createContext<ProcessorFunctions>({} as ProcessorFunctions);

export const ProcessorContextWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [processes, setProcesses] = useState<Processes>({});
  const title = useCallback(
    (id: string, newTitle: string) => setProcesses(setTitle(id, newTitle)),
    []
  );

  const open = useCallback((id: string, url: string) => setProcesses(openProcess(id, url)), []);
  const close = useCallback(
    (id: string, closing?: boolean) => setProcesses(closeProcess(id, closing)),
    []
  );
  const maximize = useCallback((id: string) => setProcesses(maximizeProcess(id)), []);
  const minimize = useCallback((id: string) => setProcesses(minimizeProcess(id)), []);
  const linkElement = useCallback(
    (id: string, name: keyof ProcessElement, element: HTMLElement) =>
      setProcesses(setProcessElement(id, name, element)),
    []
  );
  const changeUrl = useCallback(
    (id: string, url: string) => setProcesses(changeProcessUrl(id, url)),
    []
  );

  return (
    <ProcessorContext.Provider
      value={{
        title,
        processes,
        open,
        close,
        maximize,
        minimize,
        linkElement,
        changeUrl,
      }}
    >
      {children}
    </ProcessorContext.Provider>
  );
};

export const useProcessor = (): ProcessorFunctions => useContext(ProcessorContext);

export const ProcessorConsumer = ProcessorContext.Consumer;
