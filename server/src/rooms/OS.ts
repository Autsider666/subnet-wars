import { Room, Client } from 'colyseus';
import * as http from 'http';
import { OperatingSystemState } from './schema/OperatingSystemState';
import { FileSystemEntry } from 'rooms/types';

export class OS extends Room<OperatingSystemState> {
    async onCreate(options: { username: string }) {
        this.setState(new OperatingSystemState());
        this.state.username = options.username;

        this.onMessage('type', (client, message) => {
            console.log(message, client);
        });
    }

    async onAuth(
        client: Client,
        options: any,
        request?: http.IncomingMessage
    ): Promise<boolean> {
        return options.username === this.state.username;
    }

    async onJoin(client: Client, options: any) {
        console.log(client.sessionId, 'joined!');
        const startMenuFile: FileSystemEntry = {
            path: '/startMenu/should show network scanner.uri',
            content: 'NetworkScanner'
        };
        const desktopFiles: FileSystemEntry = {
            path: '/desktop', content: {
                'test.txt': {path: '/desktop/test.txt', content: 'test script'},
                'start menu shortcut.uri': {path: '/desktop/start menu shortcut.uri', content: 'FileExplorer:startMenu'}
            }
        };
        const desktopFilesUpdate: FileSystemEntry = {
            path: '/desktop', content: {
                'second.txt': {path: '/desktop/second.txt', content: 'second test script'},
            }
        };
        const nested: FileSystemEntry = {
            path: '/desktop/a/b/c/should show network scanner.uri',
            content: 'NetworkScanner'
        };
        client.send('updateFileSystem', startMenuFile);
        client.send('updateFileSystem', desktopFiles);
        client.send('updateFileSystem', desktopFilesUpdate);
        client.send('updateFileSystem', nested);
    }

    async onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, 'left!');
    }

    async onDispose() {
        console.log('OS', this.roomId, 'disposing...');
    }
}
