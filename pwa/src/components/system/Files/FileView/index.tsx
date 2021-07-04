import FileEntry from 'components/system/Files/FileEntry';
import StyledFileView from 'components/system/Files/FileView/StyledFileView';
import StyledFileManager from 'components/system/Files/FileView/StyledFileManager';
import { useFileSystem } from 'contexts/FileSystemContext';
import { resolve } from 'path';

interface FileViewProps {
  url: string;
  compact?: boolean;
  onDirectoryClick?: (url: string) => void;
}

const FileView = ({ url, compact, onDirectoryClick }: FileViewProps): JSX.Element => {
  const { files } = useFileSystem(url);
  return (
    <StyledFileView compact={compact}>
      <StyledFileManager>
        {Object.entries(files).map(([id, entity]) => (
          <FileEntry
            key={id}
            entity={entity}
            url={resolve(url, id)}
            onDirectoryClick={onDirectoryClick}
          />
        ))}
      </StyledFileManager>
    </StyledFileView>
  );
};

export default FileView;
