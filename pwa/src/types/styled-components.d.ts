import 'styled-components';

declare module 'styled-components' {
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
      titleBar: {
        background: string;
        backgroundHover: string;
        backgroundInactive: string;
        buttonInactive: string;
        closeHover: string;
        text: string;
        textInactive: string;
      };
      fileEntry: {
        background: string;
        backgroundFocused: string;
        backgroundFocusedHover: string;
        border: string;
        borderFocused: string;
        borderFocusedHover: string;
        text: string;
        textShadow: string;
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
      titleBar: {
        buttonIconWidth: string;
        buttonWidth: string;
        fontSize: string;
        height: string;
        iconMargin: string;
        iconSize: string;
      };
      window: {
        cascadeOffset: number;
        lineHeight: string;
        outline: string;
      };

      fileEntry: {
        fontSize: string;
        iconSize: string;
      };
      fileManager: {
        gridEntryHeight: string;
        gridEntryWidth: string;
        padding: string;
        rowGap: string;
      };
    };
  }
}
