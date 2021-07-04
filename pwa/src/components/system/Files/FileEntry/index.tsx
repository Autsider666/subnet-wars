import { FileExplorerPid } from 'components/apps/FileExplorer';
import useFile from 'components/system/Files/FileEntry/useFile';
import useDoubleClick from 'components/system/useDoubleClick';
import { File, Directory } from 'contexts/FileSystemContext';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import { basename } from 'path';
import Button from 'styles/common/Button';
import { DirectoryIcon, FileIcon } from 'styles/icons/general';
import { SHORTCUT_EXTENSION } from 'utils/constants';

interface props {
  entity: File | Directory;
  url: string;
  onDirectoryClick?: (url: string) => void;
}

const Icon = ({ entity }: { entity: File | Directory }): JSX.Element =>
  'content' in entity ? <DirectoryIcon /> : <FileIcon />;

const FileEntry = ({ entity, url, onDirectoryClick }: props): JSX.Element => {
  const openFile = useFile(url);
  return (
    <StyledFileEntry>
      <Button
        onClick={useDoubleClick(() =>
          onDirectoryClick ? onDirectoryClick(url) : openFile(FileExplorerPid)
        )}
      >
        <figure title={url}>
          <Icon entity={entity} />
          <figcaption>{basename(url, SHORTCUT_EXTENSION)}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
