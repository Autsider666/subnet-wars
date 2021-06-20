import { GetServerSidePropsResult, NextPage } from 'next';
import Terminal from '../components/apps/Terminal';
import RenderComponent from '../components/system/Apps/RenderComponent';
import cookies from 'next-cookies';

const Index: NextPage = () => <RenderComponent id="1" Component={Terminal} hasWindow={true} />;

export default Index;

type User = {
  username: string;
};

export const getServerSideProps = function (context: {
  req?: { headers: { cookie?: string } };
}): GetServerSidePropsResult<User> {
  const { user } = cookies(context);

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: user,
  };
};
