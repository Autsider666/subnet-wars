import {createContext, ReactNode, useState} from 'react';
import axios from 'axios';

export type SystemState = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    loading: boolean;
    setLoading: (newState: boolean) => void;
    showStartMenu: boolean;
    toggleStartMenu: (forceStartMenu?: boolean) => void;
    logout: () => Promise<void>
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
    const logout = async (): Promise<void> => {
        setLoading(true);
        await axios.post('/api/logout');
        setLoading(false);
        setShowStartMenu(false);
        setAuthenticated(false);
    }
    return (
        <SystemContext.Provider
            value={{
                authenticated,
                setAuthenticated,
                loading,
                setLoading,
                showStartMenu,
                toggleStartMenu,
                logout
            }}
        >
            {children}
        </SystemContext.Provider>
    );
};

export default SystemContext;
