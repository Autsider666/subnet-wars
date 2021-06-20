import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // TODO add api call to server
        console.log(credentials);
        return null;
        // return {
        //   username: 'Yorick',
        // };
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
    signOut: '/auth/logout',
  },
  session: {
    jwt: true,
  },
});
