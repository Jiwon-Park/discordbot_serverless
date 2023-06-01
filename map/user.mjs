//https://discord.com/developers/docs/resources/user#user-object

export class User {
    constructor(body) {
        /**@type {string} */
        this.id = body.id;
        /**@type {string} */
        this.username = body.username;
        /**@type {string} */
        this.discriminator = body.discriminator;
        /**@type {?string} */
        this.avatar = body.avatar;
        /**@type {boolean} */
        this.bot = body.bot;
        /**@type {boolean} */
        this.system = body.system;
        /**@type {boolean} */
        this.mfa_enabled = body.mfa_enabled;
        /**@type {?string} */
        this.banner = body.banner;
        this.accent_color = body.accent_color;
        /**@type {string} */
        this.locale = body.locale;
        /**@type {boolean} */
        this.verified = body.verified;
        /**@type {?string} */
        this.email = body.email;
        this.flags = body.flags;
        this.premium_type = body.premium_type;
        this.public_flags = body.public_flags;
    }
}