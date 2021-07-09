import { useSystem } from 'contexts/SystemContext';
import { useProcessor } from 'contexts/ProcessorContext';

const useNextFocusable = (id: string): string => {
  const { stackOrder } = useSystem();
  const { processes } = useProcessor();

  const nextFocusableId = stackOrder.find(
    (stackId) => stackId !== id && !processes?.[stackId]?.minimized
  );

  return nextFocusableId || '';
};

export default useNextFocusable;
