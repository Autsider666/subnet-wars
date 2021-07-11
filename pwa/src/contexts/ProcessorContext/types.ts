import { ComponentType } from 'react';
import { ComponentProcessProps } from 'components/system/Apps/RenderComponent';

export interface ProcessElement {
  componentWindow?: HTMLElement;
  peekElement?: HTMLElement;
  taskbarEntry?: HTMLElement;
}

export interface Process extends ProcessElement {
  autoSizing?: boolean;
  backgroundColor?: string;
  closing?: boolean;
  Component: ComponentType<ComponentProcessProps>;
  hasWindow?: boolean;
  icon: () => JSX.Element;
  lockAspectRatio?: boolean;
  maximized?: boolean;
  minimized?: boolean;
  singleton?: boolean;
  title: string;
  parameter?: string;
}

export type Processes = { [id: string]: Process };
