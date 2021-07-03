import { ComponentType, Suspense } from 'react';
import Window from 'components/system/Window';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Component id={id} />
      </Suspense>
    </Window>
  ) : (
    <Component id={id} />
  );

export default RenderComponent;
