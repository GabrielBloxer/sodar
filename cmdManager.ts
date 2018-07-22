import { Client, Message } from 'discord.js';

import { Type } from './util/type.d';

import { BotOptions } from './SModule';

export interface Command {
   name: string;
   desc: string;
   comp: Type<any>;
}

export class CommandManager {
   public providers: any[] = [];

   constructor(
      private bo: BotOptions,
      private client: Client
   ) { 
      for (let i = 0; i < this.bo.providers.length; i++) {
         this.providers.push(new this.bo.providers[i]());
      };
   }

   run(msg: Message) {
      this.bo.commands.forEach(item => {
         let cmd;

         let cmdNames: {}[] = [];

         this.bo.commands.forEach(cmd => {
            cmdNames.push({
               name: cmd.name,
               desc: cmd.desc
            });
         });

         if (this.providers.length > 0) {
            cmd = new (Function.prototype.bind.apply(item.comp, [null].concat([this.client].concat(this.providers).concat([cmdNames as any]))));
         } else if (this.providers.length < 1) {
            cmd = new (Function.prototype.bind.apply(item.comp, [null].concat([this.client].concat([cmdNames as any]))));
         }

         let msgCont = msg.content.slice(this.bo.prefix.length).split(" ")[0];

         let args = msg.content.slice(this.bo.prefix.length).split(" ").slice(1);

         if (item.name == msgCont) {
            cmd.run(msg, args);
         }
      });
   }
}