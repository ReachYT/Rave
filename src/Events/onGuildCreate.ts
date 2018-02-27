import * as Discord from 'discord.js'
import {Database} from "../Database/Database";
import * as dbg from "debug";
import {Instance} from "../Misc/Globals";
export const debug = {
    silly  : dbg('Bot:onGuildCreate:Silly'),
    info   : dbg('Bot:onGuildCreate:Info'),
    warning: dbg('Bot:onGuildCreate:Warning'),
    error  : dbg('Bot:onGuildCreate:Error')
};
export default function onGuildCreate(guild : Discord.Guild, instance : Instance){
    const database = instance.database;

    database.insertNewGuild(guild);
    debug.info(`I was added to the server: ${guild.name} with ${guild.memberCount} members.`);
}