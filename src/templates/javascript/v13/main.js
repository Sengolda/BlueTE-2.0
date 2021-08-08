const Client = require('./utils/client');
const Command = require('./utils/command');
const config = require('./config/config.json');
const client = new Client();
const fs = require('fs');
const db = require('quick.db');

fs.readdirSync("./commands/")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {command}
		 */

		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command)
	})

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.on("messageCreate", message => {
	if (message.author.bot) return;

	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} wasn't found.`);

	command.run(message, args, client);
});

client.login(config.token);