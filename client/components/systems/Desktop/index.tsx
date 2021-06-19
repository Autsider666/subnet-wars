import StyledDesktop from './StyledDesktop';
import { ReactNode, useRef } from 'react';

type DesktopProps = {
  children: ReactNode;
};

const Desktop = ({ children }: DesktopProps): JSX.Element => {
  const desktopRef = useRef<HTMLElement | null>(null);

  return <StyledDesktop ref={desktopRef}>{children}</StyledDesktop>;
};

export default Desktop;
