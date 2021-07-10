import { Schema, type } from "@colyseus/schema";

export class OperatingSystemState extends Schema {
  @type("string") username: string;
  @type("string") ip: string;
}
