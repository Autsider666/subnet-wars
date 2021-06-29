import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      appBackground: string;
      text: string;
      startButton: string;
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
      highlight: string;
      glitchy: {
        left: string;
        right: string;
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
      startButton: {
        iconSize: string;
        width: string;
      };
    };
  }
}
