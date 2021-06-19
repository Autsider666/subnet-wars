import { useEffect } from 'react';
import { ComponentProcessProps } from '../system/Apps/RenderComponent';
import { useProcesses } from '../../contexts/process';

const Console = ({ id }: ComponentProcessProps): JSX.Element => {
  const {
    title,
    processes: { [id]: { url = '' } = {} },
  } = useProcesses();

  useEffect(() => {
    if (url) {
      title(id, url);
    }
  }, [id, url, title]);

  return <h1>Hello World</h1>;
};

export default Console;
