import { StyledLoginForm } from './StyledLoginForm';
import axios from 'axios';
import { FormEvent, useContext, useState } from 'react';
import { SystemContext } from '../../../contexts/SystemContext';

const LoginForm = (): JSX.Element => {
  const { setAuthenticated, setLoading } = useContext(SystemContext);
  const [validationError, hasValidationError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    const { status } = await axios.post('/api/login', {
      username,
      password,
    });
    setLoading(false);
    if (status === 200) {
      hasValidationError(false);
      setAuthenticated(true);
    } else {
      hasValidationError(true);
      setPassword('');
    }
  };

  const handleRegistration = async (): Promise<void> => {
    const { status } = await axios.post('/api/register', {
      username,
      password,
    });
    if (status === 200) {
      hasValidationError(false);
      setAuthenticated(true);
    } else {
      hasValidationError(true);
      setPassword('');
    }
  };

  return (
    <StyledLoginForm>
      <div className="login">
        <h1>Subnet wars</h1>
        {validationError && <span className="error">Try again</span>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="btn btn-block">
            Login
          </button>
          <button className="btn btn-block" onClick={() => handleRegistration()}>
            Register
          </button>
        </form>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
