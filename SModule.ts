import { Client, Message } from 'discord.js';

import { Type } from './util/type';

import { Command, CommandManager } from './cmdManager';

export interface BotOptions {
   providers: Type<any>[];
   commands: Command[];
   token: string;
   prefix: string;
}

export function SModule(bo: BotOptions) {
   return function(target: Type<any>) {
      let client: Client = new Client();
      let cmdManager: CommandManager = new CommandManager(bo, client);

      let ret = new (Function.prototype.bind.apply(target, [null].concat([client, cmdManager].concat(cmdManager.providers))));

      if (typeof ret.onReady !== 'undefined')
         client.on('ready', () => { ret.onReady(); });

      if (typeof ret.onMessage !== 'undefined') 
         client.on('message', (msg: Message) => { ret.onMessage(msg); });

      client.login(bo.token);
   }
}