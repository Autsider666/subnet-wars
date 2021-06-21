import { Schema, type, MapSchema } from "@colyseus/schema";
import { PlayerState } from "../../states/PlayerState";

export class GameState extends Schema {
  @type({ map: PlayerState })
  players = new MapSchema<PlayerState>();

  addPlayer(clientId: string, player: PlayerState): void {
    this.players[clientId] = player;
  }

  getPlayer(clientId: string): PlayerState {
    return this.players[clientId];
  }

  removePlayer(clientId: string): void {
    delete this.players[clientId];
  }
}
