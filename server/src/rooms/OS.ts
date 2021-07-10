import { System, User } from '@prisma/client';
import { Room, Client } from 'colyseus';
import * as http from 'http';
import database from '../database';
import { OperatingSystemState } from './schema/OperatingSystemState';

type OsOptions = { user: User, system: System };

export class OS extends Room<OperatingSystemState> {
    private user: User;
    private system: System;

    async onCreate(options: OsOptions) {
        this.user = options.user;
        this.system = options.system;
        this.setState(new OperatingSystemState());
        this.state.username = this.user.username;
        this.state.ip = this.user.systemIp;

        this.onMessage('type', (client, message) => {
            console.log(message, client);
        });
    }

    async onAuth(
        client: Client,
        options: OsOptions,
        request?: http.IncomingMessage
    ): Promise<boolean> {
        return options.user.username === this.user.username;
    }

    async onJoin(client: Client, options: OsOptions) {
        console.log(client.sessionId, 'joined!');

        client.send('updateFileSystem', await database.file.findMany({where: {systemIp: this.system.ip}}));
    }

    async onLeave(client: Client, consented: boolean) {
        console.log(client.sessionId, 'left!');
    }

    async onDispose() {
        console.log('OS', this.roomId, 'disposing...');
    }
}
