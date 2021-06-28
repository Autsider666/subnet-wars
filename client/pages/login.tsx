import Link from 'next/link';
import { StyledLoginForm } from '../components/system/LoginForm/StyledLoginForm';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response?.status === 401) {
    //   //TODO logout
    // }
    return error.response;
  }
);

const LoginPage = (): JSX.Element => {
  const router = useRouter();
  const [validationError, hasValidationError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect<Promise<void>>(() => {
    (async (): Promise<void> => {
      const { status } = await axios.post('https://localhost/api/refresh');
      if (status === 200) {
        await router.push('/');
      }
    })();
  }, [router]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const { status } = await axios.post('https://localhost/api/login', { username, password });
    if (status === 200) {
      router.push('/');
      hasValidationError(false);
    } else {
      hasValidationError(true);
      setPassword('');
    }
  };
  return (
    <StyledLoginForm>
      <div className="login">
        {validationError && <span className="error">Try again</span>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required="required"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required="required"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="btn btn-block">
            Login
          </button>
          <Link href="/auth/register">
            <a className="btn btn-block">Register</a>
          </Link>
        </form>
      </div>
    </StyledLoginForm>
  );
};

export default LoginPage;
