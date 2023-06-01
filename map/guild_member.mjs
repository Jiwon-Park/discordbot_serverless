//https://discord.com/developers/docs/resources/guild#guild-member-object

import { User } from "./user.mjs";

// This file defines the guild member class in discord api v10.
export class GuildMember {
    constructor(json) {
        /**@type {User} */
        this.user = new User(json.user);
        /**@type {String} */
        this.nick = json.nick;
        this.roles = json.roles;
        this.joined_at = json.joined_at;
        this.premium_since = json.premium_since;
        this.deaf = json.deaf;
        this.mute = json.mute;
        this.flags = json.flags;
        this.pending = json.pending;
        this.permissions = json.permissions;
    }
}