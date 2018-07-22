import { Message } from "discord.js";

export interface CommandRun {
   run(msg: Message, args: string[]): void;
}