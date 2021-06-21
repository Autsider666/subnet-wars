import { StyledLoginForm } from './StyledLoginForm';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginForm = ({ csrfToken }: { csrfToken: string }): JSX.Element => {
  const router = useRouter();

  return (
    <StyledLoginForm>
      <div className="login">
        {router.query.error && <span className="error">Try again</span>}
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input type="text" name="username" placeholder="Username" required="required" />
          <input type="password" name="password" placeholder="Password" required="required" />
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

export default LoginForm;
