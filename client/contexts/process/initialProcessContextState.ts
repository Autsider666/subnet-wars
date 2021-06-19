import { ProcessContextState } from './types';

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  linkElement: () => undefined,
  maximize: () => undefined,
  minimize: () => undefined,
  open: () => undefined,
  processes: {},
  title: () => undefined,
};
