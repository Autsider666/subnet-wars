import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useFileSystem } from 'contexts/FileSystemContext';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';

const FileReader = ({ id }: ComponentProcessProps): JSX.Element => {
  const { title, processes } = useProcessor();
  const { parameter } = processes[id];
  const { file } = useFileSystem(parameter);

  useEffect(() => {
    if (parameter) {
      title(id, parameter);
    }
  }, [id, parameter, title]);

  return <div>{file?.content}</div>;
};

export default FileReader;
