import type { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    background: 'grey',
    appBackground: 'lightgrey',
    window: {
      background: '#808080',
      outline: 'hsl(0deg 0% 25% / 75%)',
      outlineInactive: 'hsl(0deg 0% 30% / 75%)',
      shadow: '0 0 12px 0 rgba(0, 0, 0, 50%)',
      shadowInactive: '0 0 8px 0 rgba(0, 0, 0, 50%)',
    },
  },
};

export default defaultTheme;
