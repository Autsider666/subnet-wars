import type { ComponentProcessProps } from '../../components/system/Apps/RenderComponent';
import { ComponentType } from 'react';

export type ProcessElements = {
  taskbarEntry?: HTMLElement;
};

export type Process = ProcessElements & {
  autoSizing?: boolean;
  backgroundColor?: string;
  closing?: boolean;
  Component: ComponentType<ComponentProcessProps>;
  hasWindow?: boolean;
  icon: string;
  lockAspectRatio?: boolean;
  maximized?: boolean;
  minimized?: boolean;
  singleton?: boolean;
  title: string;
  url?: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  close: (id: string, closing?: boolean) => void;
  linkElement: (id: string, name: keyof ProcessElements, element: HTMLElement) => void;
  maximize: (id: string) => void;
  minimize: (id: string) => void;
  open: (id: string, url: string) => void;
  processes: Processes;
  title: (id: string, newTitle: string) => void;
};
