import styled from 'styled-components';

type StyledFileViewProps = {
  showEmptyMessage?: boolean;
  compact?: boolean;
};

const StyledFileView = styled.div<StyledFileViewProps>`
  height: 100%;
  width: 100%;
`;

export default StyledFileView;
