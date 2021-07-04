import { createContext, ReactNode, useContext, useState } from 'react';
import { Room } from 'colyseus.js';
import { FileData } from 'chonky';

interface FileSystemEntity extends FileData {
  content?: FileSystemEntity[];
}

type FileSystemCollection = FileSystemEntity[];

export interface FileSystemState {
  initializeFileSystem: (room: Room) => void;
  fileStructure: FileSystemCollection;
}

export const FileSystemContext = createContext<FileSystemState>({} as FileSystemState);

export const FileSystemWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [fileStructure, setFileStructure] = useState<FileSystemCollection>([
    {
      id: 'desktop',
      name: 'desktop',
      isDir: true,
      content: [
        { id: 'text', name: 'bla', type: 'jsx' },
        { id: 'dir', name: 'first folder', isDir: true },
      ],
    },
    {
      id: 'startMenu',
      name: 'startMenu',
      isDir: true,
      content: [{ id: 'test2', name: 'muhahaha', type: 'txt' }],
    },
  ]);

  const initializeFileSystem = (room: Room): void => {
    room.onMessage('updateFileSystem', (message) => {
      console.log(message);
      setFileStructure(message);
    });
  };
  return (
    <FileSystemContext.Provider value={{ initializeFileSystem, fileStructure }}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = (url: string): { files: FileSystemCollection } => {
  const { fileStructure } = useContext(FileSystemContext);
  let files = fileStructure;
  for (const urlPart of url.split('/')) {
    if (urlPart === '') {
      continue;
    }
    for (const nestedFile of files) {
      if (!nestedFile.content || nestedFile.name !== urlPart) {
        continue;
      }
      files = nestedFile.content;
      break;
    }
  }

  return { files };
};
