const BotClient = require('./src/structure/bot')

const config = require('./config.json')
const prefix = config.prefix

require('dotenv').config()
const token = process.env.TOKEN 


const client = new BotClient(token, prefix)
client.registerEvents()
client.registerCommands()
client.connect()