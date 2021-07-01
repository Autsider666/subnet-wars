import { ChonkyActions, FileBrowser, FileContextMenu, FileList } from 'chonky';
import StyledFileView from './StyledFileView';
import { useFileSystem } from '../../../../contexts/FileSystemContext';

interface FileViewProps {
  url: string;
  listDisplay?: boolean;
  compact?: boolean;
}

const FileView = ({ url, listDisplay, compact }: FileViewProps): JSX.Element => {
  const { files } = useFileSystem(url);

  return (
    <StyledFileView compact={compact}>
      <FileBrowser
        files={files}
        defaultFileViewActionId={
          listDisplay ? ChonkyActions.EnableListView.id : ChonkyActions.EnableGridView.id
        }
      >
        <FileList />
        <FileContextMenu />
      </FileBrowser>
    </StyledFileView>
  );
};

export default FileView;
