import IpInput from 'components/apps/NetworkScanner/IpInput';
import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';

const NetworkScanner = ({ id }: ComponentProcessProps): JSX.Element => {
  // useEffect(() => {
  //   if (url) {
  //     title(id, url);
  //   }
  // }, [id, url, title]);
  console.log(id);
  return (
    <>
      <div>
        IP:
        <IpInput onChange={(ip) => console.log('new', ip)} />
      </div>
    </>
  );
};

export default NetworkScanner;
