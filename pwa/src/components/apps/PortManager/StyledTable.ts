import styled from 'styled-components';

const StyledTable = styled.table`
  table-layout: auto;
  width: 100%;
  text-align: center;

  th {
    background: grey;
  }

  tr {
    backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};

    :nth-child(odd) {
      background: ${({ theme }) => theme.colors.text};
    }

    :nth-child(even) {
      background: red;
    }
  }
`;

export default StyledTable;
