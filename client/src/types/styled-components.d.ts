import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      appBackground: string;
      window: {
        background: string;
        outline: string;
        outlineInactive: string;
        shadow: string;
        shadowInactive: string;
      };
    };
  }
}
