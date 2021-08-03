const Discord = require('discord.js');
const client = new Discord.Client({ intents: Discord.Intents.ALL });
const config = require('./config/config.json');
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
const fs = require('fs');
const { cooldowns } = client;
const db = require('quick.db');

client.on('message', async message => {
    // Guild Prefixes
    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null || !prefix) {
      prefix = config.prefix
    }

    // Executing command handler with aliases & cooldowns

    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait \`${timeLeft.toFixed(1)}\` more second(s) before reusing the \`${command.name}\` command!`);
        }
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this!');
        }
    }

	command.execute(client, message, args);
	
});
// Setting up event handler

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

// Setting up command handler

const commandFolders = fs.readdirSync('./commands/');

for (const folder of commandFolders) {
    const commandFolders = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFolders) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command)
    }
}

// Bot login
client.login(config.token);