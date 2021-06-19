import contextFactory, { ProcessProviderProps } from '../ContextFactory';
import { initialSessionContextState } from './initialSessionContextState';
import useSessionContextState, { SessionContextState } from './useSessionContextState';
import { Consumer } from 'react';

const {
  NewConsumer,
  NewProvider,
  useContext,
}: {
  NewConsumer: Consumer<SessionContextState>;
  NewProvider: (props: ProcessProviderProps) => JSX.Element;
  useContext: () => SessionContextState;
} = contextFactory<SessionContextState>(initialSessionContextState, useSessionContextState);

export { NewConsumer as SessionConsumer, NewProvider as SessionProvider, useContext as useSession };
