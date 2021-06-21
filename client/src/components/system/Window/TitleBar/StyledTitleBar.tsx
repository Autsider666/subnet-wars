import styled from 'styled-components';
import DefaultTitleBarTheme from './DefaultTitleBarTheme';

type StyledTitleBarProps = {
  foreground: boolean;
};

const StyledTitleBar = styled.header<StyledTitleBarProps>`
  background-color: ${({ foreground }) =>
    foreground
      ? DefaultTitleBarTheme.colors.background
      : DefaultTitleBarTheme.colors.backgroundInactive};
  border-bottom: ${({ foreground }) =>
    foreground
      ? `1px solid ${DefaultTitleBarTheme.colors.background}`
      : `1px solid ${DefaultTitleBarTheme.colors.backgroundInactive}`};
  display: flex;
  height: ${DefaultTitleBarTheme.sizes.height};

  h1 {
    color: ${({ foreground }) =>
      foreground ? DefaultTitleBarTheme.colors.text : DefaultTitleBarTheme.colors.textInactive};
    display: flex;
    flex-grow: 1;
    font-size: ${DefaultTitleBarTheme.sizes.fontSize};
    font-weight: normal;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      min-width: inherit;
      position: relative;
      top: -1px;

      img {
        height: ${DefaultTitleBarTheme.sizes.iconSize};
        margin: ${DefaultTitleBarTheme.sizes.iconMargin};
        width: ${DefaultTitleBarTheme.sizes.iconSize};
      }

      figcaption {
        letter-spacing: -0.1px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: ${({ foreground }) =>
        foreground
          ? `1px solid ${DefaultTitleBarTheme.colors.background}`
          : `1px solid ${DefaultTitleBarTheme.colors.backgroundInactive}`};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${DefaultTitleBarTheme.sizes.buttonWidth};

      svg {
        fill: ${({ foreground }) =>
          foreground
            ? DefaultTitleBarTheme.colors.text
            : DefaultTitleBarTheme.colors.buttonInactive};
        margin: 0 1px 2px 0;
        width: ${DefaultTitleBarTheme.sizes.buttonIconWidth};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
        }
      }

      &:hover {
        background-color: ${DefaultTitleBarTheme.colors.backgroundHover};

        svg {
          fill: ${DefaultTitleBarTheme.colors.text};
        }

        &.close {
          background-color: ${DefaultTitleBarTheme.colors.closeHover};
          transition: background-color 0.25s ease;
        }
      }

      &:active {
        background-color: rgb(51, 51, 51);

        &.close {
          background-color: rgb(139, 10, 20);
        }
      }

      &:disabled {
        svg {
          fill: ${({ foreground }) => (foreground ? 'rgb(50, 50, 50)' : 'rgb(60, 60, 60)')};
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`;

export default StyledTitleBar;
