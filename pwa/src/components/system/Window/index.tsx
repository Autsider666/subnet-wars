import { ReactNode } from 'react';
import { ComponentProcessProps } from '../Apps/RenderComponent';
import StyledWindow from './StyledWindow';
import TitleBar from './TitleBar';

type WindowProps = ComponentProcessProps & {
  children: ReactNode;
};

const Window = ({ children }: WindowProps): JSX.Element => {
  return (
    <StyledWindow foreground={true}>
      <TitleBar title="Terminal" />
      {children}
    </StyledWindow>
  );
};

export default Window;
