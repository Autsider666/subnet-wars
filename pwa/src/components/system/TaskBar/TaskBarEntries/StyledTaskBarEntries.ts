import styled from 'styled-components';

const StyledTaskBarEntries = styled.ol`
  column-gap: 1px;
  display: flex;
  height: 100%;
  left: ${({ theme }) => theme.sizes.taskbar.height};
  margin: 0 3px;
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskBarEntries;
