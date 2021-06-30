export type TitleBarTheme = {
  colors: {
    background: string;
    backgroundHover: string;
    backgroundInactive: string;
    buttonInactive: string;
    closeHover: string;
    text: string;
    textInactive: string;
  };
  sizes: {
    buttonIconWidth: string;
    buttonWidth: string;
    fontSize: string;
    height: string;
    iconMargin: string;
    iconSize: string;
  };
};

const DefaultTitleBarTheme: TitleBarTheme = {
  colors: {
    background: 'rgb(0, 0, 0)',
    backgroundHover: 'rgb(26, 26, 26)',
    backgroundInactive: 'rgb(43, 43, 43)',
    buttonInactive: 'rgb(128, 128, 128)',
    closeHover: 'rgb(232, 17, 35)',
    text: 'rgb(255, 255, 255)',
    textInactive: 'rgb(170, 170, 170)',
  },
  sizes: {
    buttonIconWidth: '10px',
    buttonWidth: '45px',
    fontSize: '12px',
    height: '30px',
    iconMargin: '0 5px 0 8px',
    iconSize: '16px',
  },
};

export default DefaultTitleBarTheme;
