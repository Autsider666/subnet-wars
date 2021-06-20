import { StyledLoginForm } from './StyledLoginForm';
import Link from 'next/link';

const LoginForm = (): JSX.Element => {
  return (
    <StyledLoginForm>
      <div className="login">
        <form method="post">
          <input type="text" name="u" placeholder="Username" required="required" />
          <input type="password" name="p" placeholder="Password" required="required" />
          <button type="submit" className="btn btn-block">
            Login
          </button>
          <Link href="/register">
            <a className="btn btn-block">Register</a>
          </Link>
        </form>
      </div>
    </StyledLoginForm>
  );
};

export default LoginForm;
