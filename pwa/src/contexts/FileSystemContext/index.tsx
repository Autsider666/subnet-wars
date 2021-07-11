import { getFile, insertIntoFileSystem } from 'contexts/FileSystemContext/functions';
import { FileSystemCollection, FileSystemEntry } from 'contexts/FileSystemContext/types';
import { createContext, ReactNode, useContext, useState } from 'react';
import { Room } from 'colyseus.js';
import merge from 'lodash/merge';

export interface FileSystemState {
  initializeFileSystem: (room: Room) => void;
  rootDirectory: FileSystemCollection;
}

export const FileSystemContext = createContext<FileSystemState>({} as FileSystemState);

export const FileSystemProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [rootDirectory, setRootDirectory] = useState<FileSystemCollection>({});

  const initializeFileSystem = (room: Room): void => {
    room.onMessage('updateFileSystem', (entry: FileSystemEntry[]) => {
      const changes = insertIntoFileSystem(entry);
      const newState = merge(rootDirectory, changes);
      setRootDirectory(JSON.parse(JSON.stringify(newState)));
    });
  };

  return (
    <FileSystemContext.Provider value={{ initializeFileSystem, rootDirectory }}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = (
  url: string | null = null
): { file: FileSystemEntry | null; initializeFileSystem: (room: Room) => void } => {
  const { rootDirectory, initializeFileSystem } = useContext(FileSystemContext);
  const file = getFile(rootDirectory, url);

  return { file, initializeFileSystem };
};
