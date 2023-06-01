//https://discord.com/developers/docs/interactions/receiving-and-responding#responding-to-an-interaction

export class InteractionResponse {
    /** 
     * @param {Number} type
     * * PONG = 1
     * * CHANNEL_MESSAGE_WITH_SOURCE = 4
     * * DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5
     * * DEFERRED_UPDATE_MESSAGE = 6
     * * UPDATE_MESSAGE = 7
     * @param {InteractionResponseData} data InteractionResponseData instance
     * @param {Number} statusCode HTTP status code
     */
    constructor(type, data, statusCode=200) {
        this.statusCode = statusCode
        this.type = type;
        this.data = data;
    }
}

export class InteractionResponseData {
    /**
     * @param {String} content 
     * @param {Embed[]} embeds 
     * @param {AllowedMentions} allowed_mentions 
     * @param {MessageComponent[]} components 
     * @param {Attachment[]} attachments
     */
    constructor(content, embeds = null, allowed_mentions = null, components = null, attachments = null) {
        this.content = content;
        if (embeds != null) {
            this.embeds = embeds;
        }
        if (allowed_mentions != null) {
            this.allowed_mentions = allowed_mentions;
        }
        if (components != null) {
            this.components = components;
        }
        if (attachments != null) {
            this.attachments = attachments;
        }
    }
}