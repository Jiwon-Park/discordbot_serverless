import dotenv from 'dotenv';
import axios from 'axios';
import commands from './commands.mjs'

dotenv.config();

let url = `https://discord.com/api/v10/applications/${process.env.CLIENT_ID}/commands`

const headers = {
  "Authorization": `Bot ${process.env.TOKEN}`,
  "Content-Type": "application/json"
}
commands['register'].forEach(command_data => {
    axios.post(url, JSON.stringify(command_data), {
        headers: headers,
    })
});
axios.get(url, {headers: headers}).then(response => {
    console.log(response.data);
})
