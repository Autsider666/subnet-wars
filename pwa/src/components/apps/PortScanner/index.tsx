import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useGameState } from 'contexts/GameContext';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';

const PortScanner = ({ id }: ComponentProcessProps): JSX.Element => {
  const { title } = useProcessor();
  const {
    state: { ip = 'Loading ip...' },
  } = useGameState();

  useEffect(() => {
    if (ip) {
      title(id, ip);
    }
  }, [id, ip, title]);

  return (
    <>
      <div>Scan</div>
    </>
  );
};

export default PortScanner;
