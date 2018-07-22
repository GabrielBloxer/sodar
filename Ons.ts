import { Message } from "discord.js";

export interface OnReady {
   onReady(): void;
}

export interface OnMessage {
   onMessage(message: Message): void;
}