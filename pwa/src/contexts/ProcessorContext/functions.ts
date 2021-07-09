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

export const createPid = (processId: string, url: string): string =>
  url ? `${processId}-${url}-${Math.random()}` : processId;

export const openProcess =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes => {
    const { singleton } = processRegistry[processId] || {};

    if (singleton && Object.keys(currentProcesses).includes(processId)) {
      return setProcessSettings(processId, { url })(currentProcesses);
    }

    const id = singleton ? processId : createPid(processId, url);

    return currentProcesses[id] || !processRegistry[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processRegistry[processId],
            url,
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

export const changeProcessUrl =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, {
      url,
    })(currentProcesses);

export const setProcessElement =
  (processId: string, name: keyof ProcessElement, element: HTMLElement) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { [name]: element })(currentProcesses);

export const setTitle =
  (processId: string, title: string) =>
  (currentProcesses: Processes): Processes =>
    setProcessSettings(processId, { title })(currentProcesses);
