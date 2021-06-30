import React, { useContext, useEffect } from 'react';
import SystemContext from './contexts/SystemContext';
import LoginForm from './components/system/LoginForm';
import axios from 'axios';
import Desktop from './components/system/Desktop';
import Loader from './components/Loader';

const App = (): JSX.Element => {
  const { authenticated, setAuthenticated, loading, setLoading } = useContext(SystemContext);

  useEffect(() => {
    (async (): Promise<void> => {
      setLoading(true);
      const { status } = await axios.post('/api/refresh');
      setLoading(false);
      if (status === 200) {
        setAuthenticated(true);
      }
    })();
  }, [setLoading, setAuthenticated]);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        setAuthenticated(false);
      }
      return error.response;
    }
  );

  return <Loader loaded={!loading}>{authenticated ? <Desktop /> : <LoginForm />}</Loader>;
};

export default App;
