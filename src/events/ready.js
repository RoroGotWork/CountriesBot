module.exports = {
    name: 'ready',
    once: false,
    run: async (client) => {
        console.log(`Bot connected as ${client.user.tag}`)
    }
}