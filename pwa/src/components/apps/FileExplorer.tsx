import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import FileView from 'components/system/Files/FileView';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { useEffect } from 'react';

const FileExplorer = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    title,
    processes: { [id]: { url = '' } = {} },
  } = useProcessor();

  useEffect(() => {
    if (url) {
      title(id, 'File Explorer ' + url);
    }
  }, [id, url, title]);

  return url ? <FileView url={url} /> : <></>;
};

export default FileExplorer;
