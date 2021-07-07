export type FileSystemEntry = File | Directory;

interface BaseFileSystemEntry {
    path: string;
}

export interface File extends BaseFileSystemEntry {
    content: string;
}

export interface Directory extends BaseFileSystemEntry {
    content: FileSystemCollection;
}

export type FileSystemCollection = { [id: string]: FileSystemEntry };
// export type FileSystemCollection = FileSystemEntry[];
