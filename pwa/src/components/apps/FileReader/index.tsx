import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useFileSystem } from 'contexts/FileSystemContext';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { useEffect } from 'react';

const FileReader = ({ id }: ComponentProcessProps): JSX.Element => {
  const { title, processes } = useProcessor();
  const { url } = processes[id];
  const { file } = useFileSystem(url);

  useEffect(() => {
    if (url) {
      title(id, url);
    }
  }, [id, url, title]);

  return <div>{file?.content}</div>;
};

export default FileReader;
