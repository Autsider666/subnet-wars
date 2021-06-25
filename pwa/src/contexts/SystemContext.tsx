import { createContext, ReactNode, useState } from "react";

export type SystemState = {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
};

export const SystemContext = createContext<SystemState>({} as SystemState);

export const SystemContextWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <SystemContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        loading,
        setLoading,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export default SystemContext;
