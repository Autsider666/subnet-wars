import FileEntry from 'components/system/Files/FileEntry';
import StyledFileView from 'components/system/Files/FileView/StyledFileView';
import StyledFileManager from 'components/system/Files/FileView/StyledFileManager';
import { useFileSystem } from 'contexts/FileSystemContext';
import { isDirectory } from 'contexts/FileSystemContext/functions';

interface FileViewProps {
  url: string;
  compact?: boolean;
  onDirectoryClick?: (url: string) => void;
}

const FileView = ({ url, compact, onDirectoryClick }: FileViewProps): JSX.Element => {
  const { file } = useFileSystem(url);
  // TODO handle single files. Should not happen here
  return (
    <StyledFileView compact={compact}>
      <StyledFileManager>
        {!file ? (
          <div>{url}</div>
        ) : (
          Object.entries(isDirectory(file) ? file.content : { url: file }).map(([id, entry]) => (
            <FileEntry key={id} entry={entry} onDirectoryClick={onDirectoryClick} />
          ))
        )}
      </StyledFileManager>
    </StyledFileView>
  );
};

export default FileView;
