import { SessionContextState } from './useSessionContextState';

export const initialSessionContextState: SessionContextState = {
  foregroundId: '',
  prependToStack: () => undefined,
  removeFromStack: () => undefined,
  setForegroundId: () => undefined,
  setThemeName: () => undefined,
  setWindowStates: () => undefined,
  stackOrder: [],
  taskBarVisible: false,
  titleBarVisible: false,
  startMenuVisible: false,
  themeName: '',
  toggleStartMenu: () => undefined,
  windowStates: {},
};
