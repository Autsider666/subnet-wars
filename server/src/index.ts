import { RedisPresence, Server } from "colyseus";
import { createServer } from "http";
import express from "express";
import { monitor } from "@colyseus/monitor";
import { OS } from "./rooms/OS";
import cookieParser from "cookie-parser";
import AuthRouter from "./Auth/AuthRouter";
import Mongoose from "mongoose";

const port = Number(process.env.port) || 2567;

Mongoose.connect("mongodb://root:example@mongo", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/status", monitor());
app.use(AuthRouter);

const gameServer = new Server({
  server: createServer(app),
  presence: new RedisPresence({
    host: "redis",
  }),
});

gameServer.define("os", OS);

gameServer.listen(port);
