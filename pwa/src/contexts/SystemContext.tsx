import { Size } from 'components/system/Window/RndWindow/useResizable';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import axios from 'axios';
import { Position } from 'react-rnd';

interface WindowState {
  position?: Position;
  size?: Size;
}

type WindowStates = {
  [id: string]: WindowState;
};

export type SystemState = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  showStartMenu: boolean;
  toggleStartMenu: (forceStartMenu?: boolean) => void;
  logout: () => Promise<void>;
  foregroundId: string;
  setWindowStates: Dispatch<SetStateAction<WindowStates>>;
  windowStates: WindowStates;
  stackOrder: string[];
  prependToStack: (id: string) => void;
  removeFromStack: (id: string) => void;
  setForegroundId: Dispatch<SetStateAction<string>>;
};

const SystemContext = createContext<SystemState>({} as SystemState);

export const SystemContextWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [windowStates, setWindowStates] = useState<WindowStates>({});
  const [stackOrder, setStackOrder] = useState<string[]>([]);
  const [foregroundId, setForegroundId] = useState('');

  const toggleStartMenu = (forceStartMenu?: boolean): void => {
    setShowStartMenu(forceStartMenu || !showStartMenu);
  };
  const logout = async (): Promise<void> => {
    setLoading(true);
    await axios.post('/api/logout');
    setLoading(false);
    setShowStartMenu(false);
    setAuthenticated(false);
  };
  const prependToStack = useCallback(
    (id: string) =>
      setStackOrder((currentStackOrder) => [
        id,
        ...currentStackOrder.filter((stackId) => stackId !== id),
      ]),
    []
  );
  const removeFromStack = useCallback(
    (id: string) =>
      setStackOrder((currentStackOrder) => currentStackOrder.filter((stackId) => stackId !== id)),
    []
  );
  return (
    <SystemContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        showStartMenu,
        toggleStartMenu,
        logout,
        foregroundId,
        setWindowStates,
        windowStates,
        stackOrder,
        prependToStack,
        removeFromStack,
        setForegroundId,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = (): SystemState => useContext(SystemContext);
