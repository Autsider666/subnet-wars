import IpInput from 'components/apps/NetworkScanner/IpInput';
import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';
import { useGameState } from 'contexts/GameContext';
import { useProcessor } from 'contexts/ProcessorContext';
import { useEffect } from 'react';

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
      <div>
        <h4>Attack</h4>
        <div>
          IP:
          <IpInput onChange={(ip) => console.log('new', ip)} />
        </div>

        <div>
          Port:
          <input type="number" min={0} max={8} defaultValue={0} pattern="[0-9]*" />
        </div>
      </div>
      <div>
        <h4>From</h4>
        <div>
          IP:{' '}
          <select>
            <option value="default" selected>
              {ip}
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NetworkScanner;
