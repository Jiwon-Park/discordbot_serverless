import { Interaction, InteractionData } from "./map/interaction.mjs"
import { InteractionResponse, InteractionResponseData } from "./callback/callback.mjs"

export default {
    /**@param {Interaction} interaction */
    ping: async (interaction) => {
        let data = new InteractionResponseData("Pong!");
        return new InteractionResponse(4, data);
    },
    /**@param {Interaction} interaction */
    user: async (interaction) => {
        let data = new InteractionResponseData("Your name is " + interaction.member.user.username);
        return new InteractionResponse(4, data);
    },
    register: [
        {
            name: "ping",
            type: "1",
            description: "퐁을 해줍니다."
        },
        {
            name: "user",
            type: "1",
            description: "유저 정보를 보여줍니다."
        }
    ]
}