import { createContext } from 'react';

const Context = createContext();

const ClientContext = () => (<Context.Provider value={}>{children}</Context.Probider>)

export default ClientContext;
