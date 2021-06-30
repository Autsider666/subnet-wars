import StyledLoader from './StyledLoader';
import { ReactNode } from 'react';

const Loader = ({ children, loaded }: { children: ReactNode; loaded: boolean }): JSX.Element => (
  <>
    <StyledLoader loaded={loaded}>
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </StyledLoader>
    {children}
  </>
);

export default Loader;
