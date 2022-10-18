const BotClient = require("./src/structure/bot")

const config = require("./config.json")
const token = config.token
const prefix = config.prefix



const client = new BotClient(token, prefix)
client.registerEvents()
client.registerCommands()
client.connect()