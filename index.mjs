import nacl from "tweetnacl";
import commands from "./commands.mjs";

export const handler = async(event) => {
    const PUBLIC_KEY = process.env.PUBLIC_KEY;
    const signature = event.headers["x-signature-ed25519"];
    const timestamp = event.headers["x-signature-timestamp"];
    const strbody = event.body;
    
    console.log(strbody)

    const isVerified = nacl.sign.detached.verify(
        Buffer.from(timestamp + strbody),
        Buffer.from(signature, "hex"),
        Buffer.from(PUBLIC_KEY, "hex")
    );

    if (!isVerified) {
        return {
            "statusCode": 401,
            "body": JSON.stringify({ error: "invalid request signature" }),
        };
    }

    // replying to ping
    const body = JSON.parse(strbody);
    if (body.type === 1) {
        return {
            "statusCode": 200,
            "body": JSON.stringify({
                type: 1,
            }),
        };
    }

    // Handle /ping command
    if (body.data.name in commands) {
        return JSON.stringify(await commands[body.data.name](body));
    }

    return {
        statusCode: 404,
    }
};