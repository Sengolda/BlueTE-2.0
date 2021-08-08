const Discord = require('discord.js');
const config = require('../../config/config.json');

module.exports = {
    name: "test",
    description: "a test command",
    execute(client, message, args) {
        message.channel.send("Test command works!")
    }
}