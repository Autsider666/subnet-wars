export type WindowTheme = {
  colors: {
    background: string;
    outline: string;
    outlineInactive: string;
    shadow: string;
    shadowInactive: string;
  };
  sizes: {
    lineHeight: string;
    outline: string;
  };
};

const DefaultWindowTheme: WindowTheme = {
  colors: {
    background: '#808080',
    outline: 'hsl(0deg 0% 25% / 75%)',
    outlineInactive: 'hsl(0deg 0% 30% / 75%)',
    shadow: '0 0 12px 0 rgba(0, 0, 0, 50%)',
    shadowInactive: '0 0 8px 0 rgba(0, 0, 0, 50%)',
  },
  sizes: {
    lineHeight: '14px',
    outline: '1px',
  },
};

export default DefaultWindowTheme;
