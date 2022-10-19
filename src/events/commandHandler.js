module.exports = {
    name: 'messageCreate',
    once: false,
    run: async (client, message) => {
        if(message.author.bot) return

        if(!message.content.startsWith(client.prefix)) return;

        const args = message.content.slice(client.prefix.length).trim().split(' ')
        
        const command = client.commands.get(args[0])

       
        if(command){
            command.run(client, message, args)
        }

    }
}