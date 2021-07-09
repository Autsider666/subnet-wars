import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import FileView from 'components/system/Files/FileView';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';

const FileExplorer = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    title,
    processes: { [id]: { url = '' } = {} },
    changeUrl,
  } = useProcessor();

  useEffect(() => {
    if (url) {
      title(id, url);
    }
  }, [id, url, title]);

  return url ? (
    <FileView
      url={url}
      onDirectoryClick={(url: string) => {
        changeUrl(id, url);
      }}
    />
  ) : (
    <></>
  );
};

export default FileExplorer;
