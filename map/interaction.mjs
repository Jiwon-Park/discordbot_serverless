// This file defines the interaction class in discord api v10.
import { User } from "./user.mjs";
import { Channel } from "./channel.mjs";
import { GuildMember } from "./guild_member.mjs";
import { Message } from "./message.mjs";

export class Interaction {

    constructor(json) {
        /**
         * @type {String}
         * snowflake
         */
        this.id = json.id;
        /** @type {String} snowflake */
        this.application_id = json.application_id;
        /**
         * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
         * @type {Number}
         * PING = 1
         * APPLICATION_COMMAND = 2
         * MESSAGE_COMPONENT = 3
         * APPLICATION_COMMAND_AUTOCOMPLETE = 4
         * MODAL_SUBMIT = 5
         */
        this.type = json.type;
        if (this.type != 1) {
            /** @type {InteractionData} */
            this.data = new InteractionData(json.data);
        }
        this.guild_id = json.guild_id;
        if (json.channel != null)
            /**@type {Channel} */
            this.channel = new Channel(json.channel);
        this.channel_id = json.channel_id;
        if (json.member != null)
            /**@type {GuildMember} */
            this.member = new GuildMember(json.member);
        if (json.user != null)
            /**@type {User} */
            this.user = new User(json.user);
        this.token = json.token;
        this.version = json.version;
        if (json.message != null)
            /**@type {Message} */
            this.message = new Message(json.message);
        this.app_permissions = json.app_permissions;
        this.locale = json.locale;
        this.guild_locale = json.guild_locale;
    }
    // Getters of properties (Could be null)

}

export class InteractionData {
    constructor(data) {
        /**@type {string} */
        this.id = data.id;
        /**@type {string} */
        this.name = data.name;
        /**@type {number} */
        this.type = data.type;
        this.resolved = data.resolved;
        /**@type {InteractionOptions[]} */
        this.options = data.options;
        /**@type {string} */
        this.guild_id = data.guild_id;
        /**@type {string} */
        this.target_id = data.target_id;
    }
}