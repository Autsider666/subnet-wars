import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={themes.defaultTheme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
