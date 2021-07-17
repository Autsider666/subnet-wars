import { RedisPresence, Server } from 'colyseus';
import { createServer } from 'http';
import express from 'express';
import { monitor } from '@colyseus/monitor';
import { WebSocketTransport } from "@colyseus/ws-transport";
import populate from './database/seeding/populate';
import { OS } from './rooms/OS';
import cookieParser from 'cookie-parser';
import AuthRouter from './auth/AuthRouter';

const port = Number(process.env.port) || 2567;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/status', monitor());
app.use(AuthRouter);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server: createServer(app),
  }),
  presence: new RedisPresence({
    host: 'redis',
  }),
});

gameServer.define('os', OS);

populate();

gameServer.listen(port);
