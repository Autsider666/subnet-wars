import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import FileView from 'components/system/Files/FileView';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';

const FileExplorer = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    title,
    processes: { [id]: { parameter = '/' } = {} },
    changeParameter,
  } = useProcessor();

  useEffect(() => {
    title(id, parameter);
  }, [id, parameter, title]);

  return parameter ? (
    <FileView
      url={parameter}
      onDirectoryClick={(url: string) => {
        changeParameter(id, url);
      }}
    />
  ) : (
    <></>
  );
};

export default FileExplorer;
