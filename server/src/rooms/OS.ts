import { Room, Client } from "colyseus";
import { OperatingSystemState } from "./schema/OperatingSystemState";
import * as http from "http";

export class OS extends Room<OperatingSystemState> {
  async onCreate(options: { username: string }) {
    this.setState(new OperatingSystemState());
    this.state.username = options.username;

    this.onMessage("type", (client, message) => {
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
    console.log(client.sessionId, "joined!");
  }

  async onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  async onDispose() {
    console.log("OS", this.roomId, "disposing...");
  }
}
