import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import StyledApp from '../components/pages/StyledApp';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <StyledApp>
    123123
    <Component {...pageProps} />
  </StyledApp>
);

export default App;
