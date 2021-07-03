import React, { useEffect } from 'react';
import LoginForm from 'components/system/LoginForm';
import axios from 'axios';
import Desktop from 'components/system/Desktop';
import Loader from 'components/Loader';
import { useSystem } from 'contexts/SystemContext';

const App = (): JSX.Element => {
  const { authenticated, setAuthenticated, loading, setLoading } = useSystem();

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
