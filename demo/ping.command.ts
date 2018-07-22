import { Client, Message } from "discord.js";

export class PingCommand {
   constructor(private client: Client) {
      
   }

   run(msg: Message) {
      msg.reply(`:ping_pong: Pong! ${Math.floor(this.client.ping)}`)
   }
}