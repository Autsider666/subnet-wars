import styled from 'styled-components';
import { NextPage } from 'next';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Index: NextPage = () => {
  return <Title>Test</Title>;
};

export default Index;
