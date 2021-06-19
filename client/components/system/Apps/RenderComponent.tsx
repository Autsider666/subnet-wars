import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Window = dynamic(() => import('../Window'));

export type ComponentProcessProps = {
  id: string;
};

type RenderComponentProps = {
  Component: ComponentType<ComponentProcessProps>;
  hasWindow?: boolean;
  id: string;
};

const RenderComponent = ({ Component, hasWindow = true, id }: RenderComponentProps): JSX.Element =>
  hasWindow ? (
    <Window id={id}>
      <Component id={id} />
    </Window>
  ) : (
    <Component id={id} />
  );

export default RenderComponent;
