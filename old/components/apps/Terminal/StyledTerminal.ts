import styled from 'styled-components';
import DefaultTitleBarTheme from '../../system/Window/TitleBar/DefaultTitleBarTheme';

export const StyledTerminal = styled.div`
  background-color: ${({ theme }) => theme.colors.appBackground};
  cursor: pointer;

  display: flex;
  height: ${`calc(100% - ${DefaultTitleBarTheme.sizes.height}) !important`};
  width: 100%;

  .userInput {
    display: flex;
    flex-direction: row;

    span {
      width: 100%;
      border: 5px;
      background-color: transparent;
      word-break: break-all;
    }
  }
`;
