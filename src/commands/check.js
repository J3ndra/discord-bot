module.exports = {
    name: 'check',
    description: 'Check bot status.',
    cooldown: 5,
    execute(message) {
        message.channel.send("This bot is ready!")
    }
}