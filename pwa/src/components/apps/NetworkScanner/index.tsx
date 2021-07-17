import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useGameState } from 'contexts/GameContext';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';
import Button from 'styles/common/Button';

const NetworkScanner = ({ id }: ComponentProcessProps): JSX.Element => {
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
      <Button onClick={()=>console.log('scan')}>Scan</Button>
    </>
  );
};

export default NetworkScanner;
