import nacl from "tweetnacl";
import commands from "./commands.mjs";
import { Interaction } from "./map/interaction.mjs";
import { InteractionResponse } from "./callback/callback.mjs";

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
    const interaction = new Interaction(body);
    
    if (interaction.type === 1) {
        return JSON.stringify(new InteractionResponse(1, null))
        // return {
        //     "statusCode": 200,
        //     "body": JSON.stringify({
        //         type: 1,
        //     }),
        // };
    }
    
    // Handle slash command
    if (interaction.data.name in commands) {
        return JSON.stringify(await commands[interaction.data.name](interaction));
    }

    return {
        statusCode: 404,
    }
};