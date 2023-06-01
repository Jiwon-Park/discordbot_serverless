//https://discord.com/developers/docs/resources/channel#message-object

import { Attachment } from "./attachment.mjs";

export class Message {
    constructor(json) {
        this.id = json.id;
        this.channel_id = json.channel_id;
        this.author = json.author;
        this.content = json.content;
        this.timestamp = json.timestamp;
        this.edited_timestamp = json.edited_timestamp;
        this.tts = json.tts;
        this.mention_everyone = json.mention_everyone;
        this.mentions = json.mentions;
        this.mention_roles = json.mention_roles;
        this.mention_channels = json.mention_channels;
        this.attachments = new Attachment(json.attachments);
        this.embeds = json.embeds;
        this.reactions = json.reactions;
        this.nonce = json.nonce;
        this.pinned = json.pinned;
        this.webhook_id = json.webhook_id;
        this.type = json.type;
        this.activity = json.activity;
        this.application = json.application;
        this.application_id = json.application_id;
        this.message_reference = json.message_reference;
        this.flags = json.flags;
        this.referenced_message = json.referenced_message;
        this.interaction = json.interaction;
        this.thread = json.thread;
        this.components = json.components;
        this.sticker_items = json.sticker_items;
        this.sticker_ids = json.sticker_ids;
        this.stickers = json.stickers;
    }
}