import useFile from 'components/system/Files/FileEntry/useFile';
import StyledFileEntry from 'components/system/Files/FileEntry/StyledFileEntry';
import { isDirectory } from 'contexts/FileSystemContext/functions';
import { FileSystemEntry } from 'contexts/FileSystemContext/types';
import processRegistry from 'contexts/ProcessorContext/processRegistry';
import { basename, extname } from 'path';
import Button from 'styles/common/Button';
import { DirectoryIcon, FileIcon } from 'styles/icons/general';
import { SHORTCUT_EXTENSION } from 'utils/constants';
import { doubleClick } from 'utils/functions';

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
    const { icon } = processRegistry[pid] || {};
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
        onClick={doubleClick(() =>
          onDirectoryClick && isDirectory(entry)
            ? onDirectoryClick(url)
            : openFile(
                isDirectory(entry)
                  ? 'FileExplorer'
                  : extname(entry.path) === SHORTCUT_EXTENSION
                  ? (entry.content as string)
                  : 'FileReader'
              )
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
