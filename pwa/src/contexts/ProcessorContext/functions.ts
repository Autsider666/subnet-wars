import processRegistry from 'contexts/ProcessorContext/processRegistry';
import type { Process, ProcessElement, Processes } from 'contexts/ProcessorContext/types';

export const setProcessSettings =
  (processId: string, settings: Partial<Process>) =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId] = {
      ...newProcesses[processId],
      ...settings,
    };

    return newProcesses;
  };

export const closeProcess =
  (processId: string, closing?: boolean) =>
  (currentProcesses: Processes): Processes => {
    if (closing) {
      return setProcessSettings(processId, { closing })(currentProcesses);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [processId]: _closedProcess, ...remainingProcesses } = currentProcesses;

    return remainingProcesses;
  };

export const createPid = (processId: string): string =>
  `${processId}-${Math.round(Math.random() * 1000000)}`;

export const openProcess =
  (processId: string, parameter?: string) =>
  (currentProcesses: Processes): Processes => {
    const { singleton } = processRegistry[processId] || {};

    if (singleton && Object.keys(currentProcesses).includes(processId)) {
      return setProcessSettings(processId, { parameter })(currentProcesses);
    }

    const id = singleton ? processId : createPid(processId);

    return currentProcesses[id] || !processRegistry[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processRegistry[processId],
            parameter,
          },
        };
  };

export const maximizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, {
      maximized: !currentProcesses[processId].maximized,
    })(currentProcesses);

export const minimizeProcess =
  (processId: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, {
      minimized: !currentProcesses[processId].minimized,
    })(currentProcesses);

export const changeProcessParameter =
  (processId: string, parameter: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, {
      parameter,
    })(currentProcesses);

export const setProcessElement =
  (processId: string, name: keyof ProcessElement, element: HTMLElement) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { [name]: element })(currentProcesses);

export const setTitle =
  (processId: string, title: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { title })(currentProcesses);
