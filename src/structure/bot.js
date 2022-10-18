const {Client, GatewayIntentBits} = require("discord.js")

module.exports = class BotClient extends Client {
    constructor(){
        super({intents: [GatewayIntentBits.GuildMembers,
             GatewayIntentBits.GuildMessages, 
             GatewayIntentBits.MessageContent]})
    }


    
}