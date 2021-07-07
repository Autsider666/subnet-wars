import type { ComponentProcessProps } from 'components/system/Apps/RenderComponent';

const NetworkScanner = ({ id }: ComponentProcessProps): JSX.Element => {
  // useEffect(() => {
  //   if (url) {
  //     title(id, url);
  //   }
  // }, [id, url, title]);

  return <div>Scanning = {id}</div>;
};

export default NetworkScanner;
