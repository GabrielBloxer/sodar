import { SModule, OnReady, OnMessage, CommandManager } from '../main';

import { Client, Message } from 'discord.js';

import { PingCommand } from './ping.command';

@SModule({
   commands: [
      { name: 'ping', comp: PingCommand }
   ],
   providers: [],
   token: 'NDYxNTczMzMyMTM1OTY4NzY4.DjPkcw.__OIZHEFBGtKRo1rDJeB8hV7mW8',
   prefix: '!'
})
export class MainModule implements OnReady, OnMessage {
   constructor(
      private client: Client,
      private cmdManager: CommandManager
   ) { }

   onReady() {
      console.log("Bot's ready!");
   }

   onMessage(message: Message) {
      this.cmdManager.run(message);
   }
}