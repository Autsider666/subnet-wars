import { RedisPresence, Server } from "colyseus";
import { createServer } from "http";
import express from "express";
import { monitor } from "@colyseus/monitor";
import { GameRoom } from "./rooms/GameRoom";

const port = Number(process.env.port) || 2567;

const app = express();
app.use(express.json());
app.use("/status", monitor());

const gameServer = new Server({
  server: createServer(app),
  presence: new RedisPresence({
    host: "redis",
  }),
});

gameServer.define("login", GameRoom);

gameServer.listen(port);
