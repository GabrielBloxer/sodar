import { Client, Message } from 'discord.js';

import { Type } from "../util/type";

declare module 'sodar' {
   export interface Command {
      name: string;
      desc: string;
      comp: Type<any>;
   }

   export interface BotOptions {
      providers: Type<any>[];
      commands: Command[];
      token: string;
      prefix: string;
   }

   export interface CommandRun {
      run(msg: Message, args: string[]): void;
   }

   export interface OnReady {
      onReady(): void;
   }

   export interface OnMessage {
      onMessage(message: Message): void;
   }

   export class CommandManager {
      public providers: any[];
      constructor(bo: BotOptions, client: Client)
      run(msg: Message);
   }

   export function SModule(bo: BotOptions): Function;
}