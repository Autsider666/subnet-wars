import { createContext, ReactNode, useContext, useState } from 'react';
import { Room } from 'colyseus.js';

export interface File {
  extension: string;
}

export interface Directory {
  content: FileSystemCollection;
}

type FileSystemCollection = { [id: string]: File | Directory };

export interface FileSystemState {
  initializeFileSystem: (room: Room) => void;
  fileStructure: FileSystemCollection;
}

export const FileSystemContext = createContext<FileSystemState>({} as FileSystemState);

export const FileSystemWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  const [fileStructure, setFileStructure] = useState<FileSystemCollection>({
    t: { content: {} },
    desktop: {
      content: {
        text: { extension: 'jsx' },
        ss: { extension: 'jsx' },
        dd: { extension: 'jsx' },
        xx: { extension: 'jsx' },
        'should be folder': {
          content: {
            text: { extension: 'jsx' },
            ss: { extension: 'jsx' },
            dd: { extension: 'jsx' },
            xx: { extension: 'jsx' },
            nested: {
              content: { test2: { extension: 'txt' } },
            },
          },
        },
      },
    },
    startMenu: {
      content: { test2: { extension: 'txt' } },
    },
  });

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
    for (const [id, nestedFile] of Object.entries(files)) {
      if (!('content' in nestedFile) || id !== urlPart) {
        continue;
      }

      files = nestedFile.content;
      break;
    }
  }

  return { files };
};
