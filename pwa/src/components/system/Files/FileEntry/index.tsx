import useFile from 'components/system/Files/FileEntry/useFile';
import useDoubleClick from 'components/system/useDoubleClick';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import { isDirectory } from 'contexts/FileSystemContext/functions';
import { FileSystemEntry } from 'contexts/FileSystemContext/types';
import processRegistry from 'contexts/processor/processRegistry';
import { basename, extname } from 'path';
import Button from 'styles/common/Button';
import { DirectoryIcon, FileIcon } from 'styles/icons/general';
import { SHORTCUT_EXTENSION } from 'utils/constants';

interface props {
  entry: FileSystemEntry;
  onDirectoryClick?: (url: string) => void;
}

const Icon = ({ entry }: { entry: FileSystemEntry }): JSX.Element => {
  if (isDirectory(entry)) {
    return <DirectoryIcon />;
  }

  if (extname(entry.path) === SHORTCUT_EXTENSION) {
    const [pid] = (entry.content as string).split(':');
    const { icon } = processRegistry[pid];
    if (icon) {
      return icon();
    }
  }
  return <FileIcon />;
};

const FileEntry = ({ entry, onDirectoryClick }: props): JSX.Element => {
  const url = entry.path;
  const openFile = useFile(entry);
  return (
    <StyledFileEntry>
      <Button
        onClick={useDoubleClick(() =>
          onDirectoryClick
            ? onDirectoryClick(url)
            : openFile(isDirectory(entry) ? 'FileExplorer' : (entry.content as string))
        )}
      >
        <figure title={url}>
          <Icon entry={entry} />
          <figcaption>{basename(url, SHORTCUT_EXTENSION)}</figcaption>
        </figure>
      </Button>
    </StyledFileEntry>
  );
};

export default FileEntry;
