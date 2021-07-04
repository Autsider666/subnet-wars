import styled from 'styled-components';

type StyledFileViewProps = {
  showEmptyMessage?: boolean;
  compact?: boolean;
};

const StyledFileView = styled.div<StyledFileViewProps>`
  height: 100%;
  width: 100%;

  .chonky-chonkyRoot {
    border: 0;
    border-radius: 0;
    background-color: transparent;
    //padding: 0;

    [data-chonky-file-id] {
      color: white;

      *::after {
        border-color: ${({ theme }) =>
          `${theme.colors.background} ${theme.colors.background} transparent transparent`};
      }
    }

    [class^='listFileEntryProperty'] {
      display: ${({ compact }) => (compact ? 'none' : 'block')};
    }
  }

  .chonky-fileListEmptyContent {
    display: ${({ showEmptyMessage }) => (showEmptyMessage ? 'block' : 'none')};
  }
`;

export default StyledFileView;
