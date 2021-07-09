import { FileSystemEntry } from 'contexts/FileSystemContext/types';
import { createPid } from 'contexts/ProcessorContext/functions';
import { useProcessor } from 'contexts/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';

type UseFile = (pid: string) => void;

const useFile = (entry: FileSystemEntry): UseFile => {
  const { setForegroundId } = useSystem();
  const { minimize, open, processes } = useProcessor();
  const url = entry.path;

  return (uri: string): void => {
    const [pid, params] = uri.split(':');
    console.log(uri, pid, params, url);
    const id = createPid(pid, params || url);

    if (processes[id]) {
      if (processes[id].minimized) minimize(id);
      setForegroundId(id);
    } else {
      open(pid, url);
    }
  };
};

export default useFile;
