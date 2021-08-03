const config = require('../../config/config.json');
const db = require('quick.db');

module.exports = {
    name: "setprefix",
    cooldown: 2,
    description: "Set's a custom prefix",
    async execute(client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You don't have sufficient permissions to use this command.
        
        Missing Permissions: Administrator`)
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(`I don't have the sufficient permissions to use this command.
        
        Missing Permissions: Administrator`)

        if (!args[0]) {
            return message.channel.send("You must give the prefix you want to be set")
        }

        if (args[1]) {
            return message.channel.send("You can't give 2 prefixes")
        }

        if (args.length > 16) {
            return message.channel.send("You can't give a prefix more than 16 characters")
        }

        db.set(`prefix_${message.guild.id}`, args[0])
        await message.channel.send(`My prefix has been set to \`${args[0]}\``)
    }
}