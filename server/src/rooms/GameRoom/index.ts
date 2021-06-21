import http from "http";
import { Room, Client } from "colyseus";
import { GameState } from "./GameState";

export class GameRoom extends Room<GameState> {
  onCreate(options: any) {
    this.setState(new GameState());
  }

  onAuth(client: Client, options: any, request: http.IncomingMessage) {
    console.log("onAuth", options, request);
  }

  onJoin(client: Client, options: any, auth: any) {}

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
