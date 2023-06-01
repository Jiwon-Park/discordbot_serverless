//https://discord.com/developers/docs/resources/channel#attachment-object

export class Attachment {
    constructor(json) {
        this.id = json.id;
        this.filename = json.filename;
        this.description = json.description;
        this.content_type = json.content_type;
        this.size = json.size;
        this.url = json.url;
        this.proxy_url = json.proxy_url;
        this.height = json.height;
        this.width = json.width;
        this.ephemeral = json.ephemeral;
        this.duration_secs = json.duration_secs;
        this.waveform = json.waveform;
    }
}