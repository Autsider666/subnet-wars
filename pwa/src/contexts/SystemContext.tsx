import { createContext, ReactNode, useState } from "react";

export type SystemState = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  showStartMenu: boolean;
  toggleStartMenu: (forceStartMenu?: boolean) => void;
};

export const SystemContext = createContext<SystemState>({} as SystemState);

export const SystemContextWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const toggleStartMenu = (forceStartMenu?: boolean) => {
    setShowStartMenu(forceStartMenu || !showStartMenu);
  };
  return (
    <SystemContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
        showStartMenu,
        toggleStartMenu,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export default SystemContext;
