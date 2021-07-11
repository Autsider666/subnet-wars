import { createPid } from 'contexts/ProcessorContext/functions';
import { useProcessor } from 'contexts/ProcessorContext';
import { useSystem } from 'contexts/SystemContext';

type UseFile = (pid: string) => void;

const useFile = (): UseFile => {
  const { setForegroundId } = useSystem();
  const { minimize, open, processes } = useProcessor();

  return (uri: string): void => {
    const [pid, params] = uri.split(':');
    const id = createPid(pid);

    if (processes[id]) {
      if (processes[id].minimized) minimize(id);
      setForegroundId(id);
    } else {
      open(pid, params);
    }
  };
};

export default useFile;
