import { RedisPresence, Server } from "colyseus";
import { createServer } from "http";
import express from "express";
import { monitor } from "@colyseus/monitor";
import { OS } from "./rooms/OS";
import { login, logout, refresh } from "./auth";
import cookieParser from "cookie-parser";

const port = Number(process.env.port) || 2567;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/status", monitor());

const gameServer = new Server({
  server: createServer(app),
  presence: new RedisPresence({
    host: "redis",
  }),
  async verifyClient(info, next) {
    console.log(123, info.req.cookies);
    next(true);
  },
});

gameServer.define("os", OS);

app.post("/login", login);
app.post("/refresh", refresh);
app.post("/logout", logout);

gameServer.listen(port);
