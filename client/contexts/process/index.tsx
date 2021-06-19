import { initialProcessContextState } from './initialProcessContextState';
import useProcessContextState from './useProcessContextState';
import { ProcessContextState } from './types';
import { Consumer } from 'react';
import contextFactory, { ProcessProviderProps } from '../ContextFactory';

const {
  NewConsumer,
  NewProvider,
  useContext,
}: {
  NewConsumer: Consumer<ProcessContextState>;
  NewProvider: (props: ProcessProviderProps) => JSX.Element;
  useContext: () => ProcessContextState;
} = contextFactory<ProcessContextState>(initialProcessContextState, useProcessContextState);

export {
  NewConsumer as ProcessConsumer,
  NewProvider as ProcessProvider,
  useContext as useProcesses,
};
