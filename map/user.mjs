//https://discord.com/developers/docs/resources/user#user-object

export class User {
    constructor(json) {
        if(json == null) return null;
        /**@type {string} */
        this.id = json.id;
        /**@type {string} */
        this.username = json.username;
        /**@type {string} */
        this.discriminator = json.discriminator;
        /**@type {?string} */
        this.avatar = json.avatar;
        /**@type {boolean} */
        this.bot = json.bot;
        /**@type {boolean} */
        this.system = json.system;
        /**@type {boolean} */
        this.mfa_enabled = json.mfa_enabled;
        /**@type {?string} */
        this.banner = json.banner;
        this.accent_color = json.accent_color;
        /**@type {string} */
        this.locale = json.locale;
        /**@type {boolean} */
        this.verified = json.verified;
        /**@type {?string} */
        this.email = json.email;
        this.flags = json.flags;
        this.premium_type = json.premium_type;
        this.public_flags = json.public_flags;
    }
}