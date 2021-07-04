import { createPid } from 'contexts/processor/functions';
import { useProcessor } from 'contexts/processor/ProcessorContext';
import { Pid } from 'contexts/processor/types';
import { useSystem } from 'contexts/SystemContext';

type UseFile = (pid: Pid) => void;

const useFile = (url: string): UseFile => {
  const { setForegroundId } = useSystem();
  const { minimize, open, processes } = useProcessor();

  return (pid: Pid): void => {
    const id = createPid(pid.id, url);

    if (processes[id]) {
      if (processes[id].minimized) minimize(id);
      setForegroundId(id);
    } else {
      open(pid.id, url);
    }
  };
};

export default useFile;
