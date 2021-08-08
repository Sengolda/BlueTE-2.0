/** @format */

const Command = require('../utils/command');

module.exports = new Command({
    name: "test",
    description: "A test command",
    async run(message, args, client) {
        await message.reply("Test command works!")
    }
})