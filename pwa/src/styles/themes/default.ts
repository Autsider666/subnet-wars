import type { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    background: '#222629',
    appBackground: '#474B4F',
    text: '#86C232',
    startButton: '#FFF',
    window: {
      background: '#808080',
      outline: 'hsl(0deg 0% 25% / 75%)',
      outlineInactive: 'hsl(0deg 0% 30% / 75%)',
      shadow: '0 0 12px 0 rgba(0, 0, 0, 50%)',
      shadowInactive: '0 0 8px 0 rgba(0, 0, 0, 50%)',
    },
    taskbar: {
      active: 'hsla(0, 0%, 35%, 70%)',
      activeHover: 'hsla(0, 0%, 45%, 70%)',
      background: 'hsla(0, 0%, 10%, 70%)',
      hover: 'hsla(0, 0%, 25%, 70%)',
    },
    button: {
      background: '#61892F',
      hover: '#86C232',
    },
    highlight: '#86C232',
  },
  sizes: {
    taskbar: {
      blur: '5px',
      entry: {
        borderSize: '2px',
        fontSize: '12px',
        icon: {
          size: '16px',
        },
        maxWidth: '160px',
      },
      height: '30px',
    },
    clock: {
      fontSize: '12px',
      width: '76px',
    },
    startButton: {
      iconSize: '19px',
      width: '48px',
    },
  },
};

export default defaultTheme;
