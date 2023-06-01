//https://discord.com/developers/docs/resources/channel#channel-object

export class Channel {
    constructor(json) {
        this.id = json.id;
        this.type = json.type;
        this.guild_id = json.guild_id;
        this.position = json.position;
        this.permission_overwrites = json.permission_overwrites;
        this.name = json.name;
        this.topic = json.topic;
        this.nsfw = json.nsfw;
        this.last_message_id = json.last_message_id;
        this.bitrate = json.bitrate;
        this.user_limit = json.user_limit;
        this.rate_limit_per_user = json.rate_limit_per_user;
        this.recipients = json.recipients;
        this.icon = json.icon;
        this.owner_id = json.owner_id;
        this.application_id = json.application_id;
        this.managed = json.managed;
        this.parent_id = json.parent_id;
        this.last_pin_timestamp = json.last_pin_timestamp;
        this.rtc_region = json.rtc_region;
        this.video_quality_mode = json.video_quality_mode;
        this.message_count = json.message_count;
        this.member_count = json.member_count;
        this.thread_metadata = json.thread_metadata;
        this.member = json.member;
        this.default_auto_archive_duration = json.default_auto_archive_duration;
        this.permissions = json.permissions;
        this.total_message_sent = json.total_message_sent;
        this.flags = json.flags;
    }
}