// This file contains all the functions that interact with the Discord API.
// It uses Discord api v10.

import axios from "axios";
import {Interaction} from "./map/interaction.mjs";

let __url = "https://discord.com/api/v10";

// This function gets the user's name.
export async function getUserName(interaction) {
    return interaction.user.username;
}
// This function sends messages to the channel.
export async function sendMessage(token, channelID, message, attachments) {
    let url = __url + "/channels/" + channelID + "/messages";
    let headers = {
        
    }
}