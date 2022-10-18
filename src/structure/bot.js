const {Client, GatewayIntentBits, Collection} = require("discord.js")

const fs =  require("fs")

module.exports = class BotClient extends Client {
    constructor(token, prefix){
        super({intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent]})

        this.token = token
        this.prefix = prefix

        this.commands = new Collection()

    }

    registerEvents(){
        fs.readdirSync("./src/events")
            .filter((file) => file.endsWith(".js"))
            .forEach((file) => {
                const event = require("../events/" + file)

                if(!event.name || typeof event.name !== "string"){
                    console.log("Event from file " + file + " couldn't have been loaded")
                    return
                }

                if(event.once){
                    this.once(event.name, (...args) => event.run(this, ...args))
                } else {
                    this.on(event.name, (...args) => event.run(this, ...args))
                }

                console.log("Event " + event.name + " loaded")
            })
    }


    registerCommands(){
        fs.readdirSync("./src/commands")
            .filter((file) => file.endsWith(".js"))
            .forEach((file) => {
                const command = require("../commands/" + file)

                if(!command.name || typeof command.name !== "string"){
                    console.log("Command from " + file.slice(0, file.length - 3) + " not loaded")
                    return;
                }
                
                this.commands.set(command.name, command)
                console.log(command.name + " command loaded")

            })

            
    }


    connect(){
        this.login(this.token)
    }


    
}