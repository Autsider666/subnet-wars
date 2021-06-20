import LoginForm from '../../components/system/LoginForm';
import { getCsrfToken, GetSessionOptions } from 'next-auth/client';
import { GetServerSidePropsResult } from 'next';

type LoginProps = {
  csrfToken: string;
};

const SignIn = ({ csrfToken }: LoginProps): JSX.Element => <LoginForm csrfToken={csrfToken} />;

export default SignIn;

export const getServerSideProps = async (
  context: GetSessionOptions
): Promise<GetServerSidePropsResult<string | null>> => {
  return {
    props: { csrfToken: await getCsrfToken(context) },
  };
};
