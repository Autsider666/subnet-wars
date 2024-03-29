import styled from 'styled-components';

const StyledFileEntry = styled.li`
  display: flex;
  height: min-content;
  padding: 2px;

  svg {
    fill: ${({ theme }) => theme.colors.button.background};
  }

  &:focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      bottom: -1px;
      content: '';
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -3px;
      place-items: center;

      figcaption {
        -webkit-box-orient: vertical;
        color: ${({ theme }) => theme.colors.fileEntry.text};
        display: -webkit-box;
        font-size: ${({ theme }) => theme.sizes.fileEntry.fontSize};
        letter-spacing: -0.1px;
        -webkit-line-clamp: 2;
        line-height: 1.2;
        margin: 1px 0;
        overflow: hidden;
        padding: 2px 1px;
        text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
        word-break: break-word;
      }

      svg {
        width: ${({ theme }) => theme.sizes.fileEntry.iconSize};
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};

    svg {
      fill: ${({ theme }) => theme.colors.text};
    }

    &::before {
      border: ${({ theme }) => `1px solid ${theme.colors.fileEntry.border}`};
    }
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.fileEntry.backgroundFocused};
    z-index: 1;

    &::before {
      border: ${({ theme }) => `1px solid ${theme.colors.fileEntry.borderFocused}`};
    }

    figcaption {
      -webkit-line-clamp: initial;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.fileEntry.backgroundFocusedHover};

      &::before {
        border: ${({ theme }) => `1px solid ${theme.colors.fileEntry.borderFocusedHover}`};
      }
    }

    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`;

export default StyledFileEntry;
