import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import StyledApp from '../components/pages/StyledApp';
import { ProcessProvider } from '../contexts/process';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ProcessProvider>
    <StyledApp>
      <Component {...pageProps} />
    </StyledApp>
  </ProcessProvider>
);

export default App;
