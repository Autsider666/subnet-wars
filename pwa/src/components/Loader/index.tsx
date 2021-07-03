import StyledLoader from 'components/Loader/StyledLoader';
import { ReactNode } from 'react';

const Loader = ({ children, loaded }: { children: ReactNode; loaded: boolean }): JSX.Element => (
  <>
    <StyledLoader loaded={loaded}>
      <div id="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </StyledLoader>
    {children}
  </>
);

export default Loader;
