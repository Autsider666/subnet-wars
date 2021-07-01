import { ComponentType, createContext, ReactNode, useContext, useState } from 'react';
import { ComponentProcessProps } from '../components/system/Apps/RenderComponent';

interface Process {
  title: string;
  Component: ComponentType<ComponentProcessProps>;
  closing?: boolean;
  hasWindow?: boolean;
}

type Processes = { [id: string]: Process };

interface ProcessorFunctions {
  processes: Processes;
}

const ProcessorContext = createContext<ProcessorFunctions>({} as ProcessorFunctions);

export const ProcessorContextWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [processes] = useState<Processes>({});
  return <ProcessorContext.Provider value={{ processes }}>{children}</ProcessorContext.Provider>;
};

export const useProcessor = (): ProcessorFunctions => {
  const { processes } = useContext(ProcessorContext);

  return { processes };
};

export const ProcessorConsumer = ProcessorContext.Consumer;
