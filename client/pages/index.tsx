import Terminal from '../components/apps/Terminal';
import RenderComponent from '../components/system/Apps/RenderComponent';
import { getSession, GetSessionOptions } from 'next-auth/client';
import { GetServerSidePropsResult, NextPage } from 'next';
import { Session } from 'next-auth';

const Index: NextPage = () => <RenderComponent id="1" Component={Terminal} hasWindow={true} />;

export default Index;

export const getServerSideProps = async (
  context: GetSessionOptions
): Promise<GetServerSidePropsResult<Session>> => {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
