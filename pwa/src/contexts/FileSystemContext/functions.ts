import { FileSystemCollection, FileSystemEntry } from 'contexts/FileSystemContext/types';

export const parsePath = (path: string): string[] => path.split('/').filter((part) => part !== '');

export const isDirectory = (entry: FileSystemEntry): boolean => typeof entry.content !== 'string';

export const getFile = (
  fileSystem: FileSystemCollection,
  path: string | null
): FileSystemEntry | null => {
  if (path === null) {
    return null;
  }

  if (path === '/') {
    return { path: '/', content: fileSystem };
  }

  let files = fileSystem;
  const steps = parsePath(path);
  for (const step of steps) {
    if (!files[step]) {
      return null;
    }
    if (step === steps[steps.length - 1]) {
      return files[step];
    }

    if (!isDirectory(files[step])) {
      return null;
    }

    files = files[step].content as FileSystemCollection;
  }
  return null;
};

export const insertIntoFileSystem = (entries: FileSystemEntry[]): FileSystemCollection => {
  const fileSystem: FileSystemCollection = {};
  entries.forEach((entry) => {
    const pathSteps = parsePath(entry.path);

    const length = pathSteps.length;
    let currentDir = fileSystem;
    let currentPath = '';

    pathSteps.forEach((key, index) => {
      if (index === length - 1) {
        currentDir[key] = entry;
      } else {
        if (!currentDir[key]) {
          currentPath += '/' + key;
          currentDir[key] = { path: currentPath, content: {} };
        }

        currentDir = currentDir[key].content as FileSystemCollection;
      }
    });
  });
  return fileSystem;
};
