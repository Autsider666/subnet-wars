import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      appBackground: string;
      text: string;
      window: {
        background: string;
        outline: string;
        outlineInactive: string;
        shadow: string;
        shadowInactive: string;
      };
      taskbar: {
        active: string;
        activeHover: string;
        background: string;
        hover: string;
      };
      button: {
        background: string;
        hover: string;
      };
    };
    sizes: {
      taskbar: {
        blur: string;
        entry: {
          borderSize: string;
          fontSize: string;
          icon: {
            size: string;
          };
          maxWidth: string;
        };
        height: string;
      };
      clock: {
        fontSize: string;
        width: string;
      };
    };
  }
}
