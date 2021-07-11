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
    titleBar: {
      background: '#474B4F',
      backgroundHover: 'rgb(26, 26, 26)',
      backgroundInactive: '#6B6E70',
      buttonInactive: 'rgb(128, 128, 128)',
      closeHover: 'rgb(232, 17, 35)',
      text: 'rgb(255, 255, 255)',
      textInactive: 'rgb(170, 170, 170)',
    },
    fileEntry: {
      background: `hsl(207deg 30% 72% / 25%)`,
      backgroundFocused: `hsl(207deg 60% 72% / 30%)`,
      backgroundFocusedHover: `hsl(207deg 90% 72% / 35%)`,
      border: 'hsl(207deg 30% 72% / 30%)',
      borderFocused: 'hsl(207deg 60% 72% / 35%)',
      borderFocusedHover: 'hsl(207deg 90% 72% / 40%)',
      text: '#FFF',
      textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
    },
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
    startMenu: {
      height: '350px',
    },
    titleBar: {
      buttonIconWidth: '10px',
      buttonWidth: '45px',
      fontSize: '12px',
      height: '30px',
      iconMargin: '0 5px 0 8px',
      iconSize: '16px',
    },
    window: {
      cascadeOffset: 26,
      lineHeight: '14px',
      outline: '1px',
    },
    fileEntry: {
      fontSize: '12px',
      iconSize: '48px',
    },
    fileManager: {
      gridEntryHeight: '70px',
      gridEntryWidth: '74px',
      padding: '5px 0',
      rowGap: '28px',
    },
  },
};

export default defaultTheme;
