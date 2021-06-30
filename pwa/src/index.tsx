import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { GameContextWrapper } from './contexts/GameContext';
import { SystemContextWrapper } from './contexts/SystemContext';
import themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.defaultTheme}>
      <GlobalStyle />
      <SystemContextWrapper>
        <GameContextWrapper>
          <App />
        </GameContextWrapper>
      </SystemContextWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
