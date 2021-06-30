import styled from 'styled-components';
import DefaultWindowTheme from './DefaultWindowTheme';

type StyledWindowProps = {
  foreground: boolean;
};

const StyledWindow = styled.div<StyledWindowProps>`
  background-color: ${DefaultWindowTheme.colors.background};
  box-shadow: ${({ foreground }) =>
    foreground ? DefaultWindowTheme.colors.shadow : DefaultWindowTheme.colors.shadowInactive};
  height: 100%;
  outline: ${({ foreground }) =>
    `${DefaultWindowTheme.colors.outline} solid ${
      foreground ? DefaultWindowTheme.colors.outline : DefaultWindowTheme.colors.outlineInactive
    }`};
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export default StyledWindow;
