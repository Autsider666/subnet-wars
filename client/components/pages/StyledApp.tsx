import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import themes from '../../styles/themes';
import { ReactNode } from 'react';

type StyledAppProps = {
  children: ReactNode;
};

const StyledApp = ({ children }: StyledAppProps): JSX.Element => (
  <ThemeProvider theme={themes.defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StyledApp;
