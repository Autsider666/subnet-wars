import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    font-family: monospace;
    font-size: 1.3rem;
    overflow: hidden;
    user-select: none;
    
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default GlobalStyle;
