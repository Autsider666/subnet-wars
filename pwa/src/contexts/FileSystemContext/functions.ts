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

export const insertIntoFileSystem = (entry: FileSystemEntry): FileSystemCollection => {
  const fileSystem: FileSystemCollection = {};

  const pathSteps = parsePath(entry.path);

  const length = pathSteps.length;
  let currentDir = fileSystem;
  let currentPath = '';

  pathSteps.forEach(function (key, index) {
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
  return fileSystem;
};
