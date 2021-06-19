import { Consumer, ComponentType, createContext, ReactNode, useContext } from 'react';

export type ProcessProviderProps = {
  children: ReactNode;
};

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T,
  ContextComponent?: ComponentType
) => {
  NewConsumer: Consumer<T>;
  NewProvider: (props: ProcessProviderProps) => JSX.Element;
  useContext: () => T;
};

const contextFactory: ContextFactory = (initialContextState, useContextState, ContextComponent) => {
  const Context = createContext(initialContextState);
  const ProcessProvider = ({ children }: ProcessProviderProps): JSX.Element => (
    <Context.Provider value={useContextState()}>
      {children}
      {ContextComponent ? <ContextComponent /> : <></>}
    </Context.Provider>
  );

  return {
    NewConsumer: Context.Consumer,
    NewProvider: ProcessProvider,
    useContext: () => useContext(Context),
  };
};

export default contextFactory;
