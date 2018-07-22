"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const cmdManager_1 = require("./cmdManager");
function SModule(bo) {
    return function (target) {
        let client = new discord_js_1.Client();
        let cmdManager = new cmdManager_1.CommandManager(bo, client);
        let ret = new (Function.prototype.bind.apply(target, [null].concat([client, cmdManager].concat(cmdManager.providers))));
        if (typeof ret.onReady !== 'undefined')
            client.on('ready', () => { ret.onReady(); });
        if (typeof ret.onMessage !== 'undefined')
            client.on('message', (msg) => { ret.onMessage(msg); });
        client.login(bo.token);
    };
}
exports.SModule = SModule;
