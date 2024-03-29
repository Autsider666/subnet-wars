import styled from 'styled-components';

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  bottom: 0;
  height: 100vh;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;

  //background: #333;
  //background-image: linear-gradient(
  //    rgba(0, 255, 0, 0.7) 0.1em,
  //    transparent 0.1em
  //  ),
  //  linear-gradient(90deg, rgba(0, 255, 0, 0.7) 0.1em, transparent 0.1em);
  //background-size: 3em 3em;
`;

export default StyledDesktop;
