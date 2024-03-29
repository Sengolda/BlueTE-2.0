#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const inquirer = require('inquirer');
const prompt = require('prompt-sync')();
const nodeDiskInfo = require('node-disk-info')
const fse = require("fs-extra");
const openExplorer = require('open-file-explorer');

console.log(
    chalk.blueBright(
        figlet.textSync('BlueTE', { horizontalLayout: 'full' })
    )
)

var TokenValue = prompt(chalk.greenBright('>> Enter your token:'));

var PrefixValue = prompt(chalk.greenBright('>> Enter your prefix:'));

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

var i = randomNumber(1, 999)

var Selection = prompt(chalk.greenBright('>> Select: 1: JavaScript, 2: Python, 3: TypeScript [Coming Soon]'))

if (Selection == 1) {
    var JSSelection = prompt(chalk.greenBright('>> 1. DiscordJS V13 [Latest] | 2. DiscordJS V12'))

    if (JSSelection == 1) {
        exec(`npm install discord.js`)
        console.log(chalk.greenBright('[*] Installing required package: Discord.JS'))
        exec(`npm install quick.db`)
        console.log(chalk.greenBright('[*] Installing required package: Quick.DB'))

        // Creates the base bot project folder
        exec(`mkdir bot-project-${i}`)
        console.log(chalk.greenBright('[*] Creating base folder'))

        exec(`cd bot-project-${i} && mkdir config`)
        console.log(chalk.greenBright('[*] Creating config folder'))

        exec(`cd bot-project-${i} && mkdir commands`)
        console.log(chalk.greenBright('[*] Creating commands folder'))

        exec(`cd bot-project-${i} && mkdir events`)
        console.log(chalk.greenBright('[*] Creating events folder'))

        exec(`cd bot-project-${i} && mkdir utils`)
        console.log(chalk.greenBright('[*] Creating utils folder'))

        exec(`cd bot-project-${i} && echo """const Discord = require('discord.js');"""> index.js`)
        console.log(chalk.greenBright('[*] Creating main.js file'))

        exec(`cd bot-project-${i}/config/ && echo {"token": "${TokenValue}", "prefix": "${PrefixValue}"} > config.json`)
        console.log(chalk.greenBright('[*] Creating config.json file'))

        exec(`cd bot-project-${i}/commands/ && echo const Discord = require('discord.js'); > test.js`)
        console.log(chalk.greenBright('[*] Creating test.js command file'))
    
        exec(`cd bot-project-${i}/events/ && echo const Discord = require('discord.js'); > ready.js`)
        console.log(chalk.greenBright('[*] Creating ready.js event file'))

        exec(`cd bot-project-${i}/utils/ && echo const Discord = require('discord.js'); > command.js`)
        console.log(chalk.greenBright('[*] Creating command.js command handler file'))

        exec(`cd bot-project-${i}/utils/ && echo const Discord = require('discord.js'); > client.js`)
        console.log(chalk.greenBright('[*] Creating client.js client file'))

        let main = fs.readFileSync(path.join(__dirname, 'templates/javascript/v13/main.js'))
        fs.writeFile(`bot-project-${i}/index.js`, main, (err) => {
            // throws an error, you could also catch it here
        });

        let testJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v13/test.js'))
        let readyJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v13/ready.js'))
        let commandJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v13/command.js'))
        let clientJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v13/client.js'))

        fs.writeFile(`bot-project-${i}/events/ready.js`, readyJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to ready.js file'))
        });

        fs.writeFile(`bot-project-${i}/commands/test.js`, testJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to test.js file'))
        });

        fs.writeFile(`bot-project-${i}/utils/command.js`, commandJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to command.js file'))
        });

        fs.writeFile(`bot-project-${i}/utils/client.js`, clientJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to client.js file'))
        });


        const pathProject = `bot-project-${i}`;
        openExplorer(pathProject, err => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("[!] Success! Opened bot project folder!")
            }
        });

    console.log(chalk.greenBright("[!] Success! Opened bot project folder!"))
    }

    if (JSSelection == 2) {
        exec(`npm install discord.js`)
        console.log(chalk.greenBright('[*] Installing required package: Discord.JS'))
        exec(`npm install quick.db`)
        console.log(chalk.greenBright('[*] Installing required package: Quick.DB'))
    
        // Creates the base bot project folder
        exec(`mkdir bot-project-${i}`)
        console.log(chalk.greenBright('[*] Creating base folder'))
    
        exec(`cd bot-project-${i} && mkdir config`)
        console.log(chalk.greenBright('[*] Creating config folder'))
    
        exec(`cd bot-project-${i} && mkdir commands`)
        console.log(chalk.greenBright('[*] Creating commands folder'))
    
        exec(`cd bot-project-${i} && mkdir events`)
        console.log(chalk.greenBright('[*] Creating events folder'))
    
        exec(`cd bot-project-${i}/commands/ && mkdir fun && mkdir misc && mkdir moderation && mkdir other`)
        console.log(chalk.greenBright('[*] Creating command subfolders'))
    
        exec(`cd bot-project-${i} && echo """const Discord = require('discord.js');"""> index.js`)
        console.log(chalk.greenBright('[*] Creating main.js file'))
    
        exec(`cd bot-project-${i}/config/ && echo {"token": "${TokenValue}", "prefix": "${PrefixValue}"} > config.json`)
        console.log(chalk.greenBright('[*] Creating config.json file'))
    
        exec(`cd bot-project-${i}/commands/other/ && echo const Discord = require('discord.js'); > test.js`)
        console.log(chalk.greenBright('[*] Creating test.js command file'))

    
        exec(`cd bot-project-${i}/events/ && echo const Discord = require('discord.js'); > ready.js`)
        console.log(chalk.greenBright('[*] Creating ready.js event file'))
    
        let main = fs.readFileSync(path.join(__dirname, 'templates/javascript/v12/main.js'))
        fs.writeFile(`bot-project-${i}/index.js`, main, (err) => {
            // throws an error, you could also catch it here
        });
    
        let testJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v12/test.js'))
        let readyJSFile = fs.readFileSync(path.join(__dirname, 'templates/javascript/v12/ready.js'))
    
        fs.writeFile(`bot-project-${i}/events/ready.js`, readyJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to ready.js file'))
        });
    
        fs.writeFile(`bot-project-${i}/commands/other/test.js`, testJSFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to test.js file'))
        });
    
        const pathProject = `bot-project-${i}`;
        openExplorer(pathProject, err => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("[!] Success! Opened bot project folder!")
            }
        });
    }
}

if (Selection == 2) {
    var PYSelection = prompt(chalk.greenBright('>> 1. Basic [Not subclassed, for beginners] | 2. Advanced [Subclassed, for non-beginners]'))
    
    if (PYSelection == 1) {

    exec('py -m pip3 install discord.py')
    console.log(chalk.greenBright('[*] Installing Required Package: Discord.PY'))

    exec('py -m pip3 install aiosqlite')
    console.log(chalk.greenBright('[*] Installing Required Package: AioSQLITE'))

    exec(`mkdir bot-project-${i}`)
    console.log(chalk.greenBright('[*] Creating base folder'))
    
    exec(`cd bot-project-${i} && mkdir commands`)
    console.log(chalk.greenBright('[*] Creating commands folder'))

    exec(`cd bot-project-${i} && mkdir config`)
    console.log(chalk.greenBright('[*] Creating config folder'))

    exec(`cd bot-project-${i} && echo import discord > bot.py`)
    console.log(chalk.greenBright('[*] Creating bot.py file'))

    // exec(`cd bot-project-${i}/config/ && echo ${TokenValue} > token.txt`)
    // console.log(chalk.greenBright('[*] Creating token file'))

    // exec(`cd bot-project-${i}/config/ && echo ${PrefixValue} > prefix.txt`)
    // console.log(chalk.greenBright('[*] Creating prefix file'))

    exec(`cd bot-project-${i}/config && echo TOKEN = "${TokenValue}" > token.py`)
    console.log(chalk.greenBright("[*] Creating token.py file"))

    exec(`cd bot-project-${i}/config && echo PREFIX = "${PrefixValue}" > prefix.py`)

    exec(`cd bot-project-${i}/commands/ && echo import discord
    from discord.ext import commands
    
    class Test(commands.Cog):
        def __init__(self, bot):
            self.bot = bot
    
        @commands.command()
        async def test(self, ctx):
            await ctx.send("Test command works!")
    
    def setup(bot):
        bot.add_cog(Test(bot)) > test.py`)
    console.log(chalk.greenBright('[*] Creating test.py file'))

    let main = fs.readFileSync(path.join(__dirname, 'templates/python/basic/bot.py'))
    let testFile = fs.readFileSync(path.join(__dirname, 'templates/python/basic/test.py'))

    fs.writeFile(`bot-project-${i}/bot.py`, main, (err) => {
        console.log(chalk.greenBright('[*] Writing to bot.py file'))
    });

    fs.writeFile(`bot-project-${i}/commands/test.py`, testFile, (err) => {
        console.log(chalk.greenBright('[*] Writing to test.py file'))
    });

    const pathProject = `bot-project-${i}`;
    openExplorer(pathProject, err => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Opened bot project folder!")
        }
    });

    console.log(chalk.greenBright("[!] Success! Opened bot project folder!")) 
    }

    if (PYSelection == 2) {
        exec('py -m pip3 install discord.py')
        console.log(chalk.greenBright('[*] Installing Required Package: Discord.PY'))

        exec('py -m pip3 install aiosqlite')
        console.log(chalk.greenBright('[*] Installing Required Package: AioSQLITE'))

        exec(`mkdir bot-project-${i}`)
        console.log(chalk.greenBright('[*] Creating base folder'))

        exec(`cd bot-project-${i} && mkdir lib`)
        console.log(chalk.greenBright('[*] Creating lib folder'))
        
        exec(`cd bot-project-${i}/lib && mkdir commands`)
        console.log(chalk.greenBright('[*] Creating commands folder'))

        exec(`cd bot-project-${i}/lib && mkdir config`)
        console.log(chalk.greenBright('[*] Creating config folder'))

        exec(`cd bot-project-${i}/lib && mkdir utils`)
        console.log(chalk.greenBright('[*] Creating utils folder'))

        exec(`cd bot-project-${i} && echo import discord > bot.py`)
        console.log(chalk.greenBright('[*] Creating bot.py file'))

        exec(`cd bot-project-${i} && echo import discord > launch.py`)
        console.log(chalk.greenBright('[*] Creating launch.py file'))

        exec(`cd bot-project-${i}/lib/config && echo TOKEN = "${TokenValue}" > token.py`)
        console.log(chalk.greenBright("[*] Creating token.py file"))

        exec(`cd bot-project-${i}/lib/config && echo PREFIX = "${PrefixValue}" > prefix.py`)

        exec(`cd bot-project-${i}/lib/commands/ && echo import discord
        from discord.ext import commands
        
        class Test(commands.Cog):
            def __init__(self, bot):
                self.bot = bot
        
            @commands.command()
            async def test(self, ctx):
                await ctx.send("Test command works!")
        
        def setup(bot):
            bot.add_cog(Test(bot)) > test.py`)
        console.log(chalk.greenBright('[*] Creating test.py file'))

        exec(`cd bot-project-${i}/lib/utils/ && echo import discord > help.py`)
        console.log(chalk.greenBright('[*] Creating help.py file'))

        let main = fs.readFileSync(path.join(__dirname, 'templates/python/advanced/bot.py'))
        let testFile = fs.readFileSync(path.join(__dirname, 'templates/python/advanced/test.py'))
        let helpFile = fs.readFileSync(path.join(__dirname, 'templates/python/advanced/help.py'))
        let launchFile = fs.readFileSync(path.join(__dirname, 'templates/python/advanced/launch.py'))

        fs.writeFile(`bot-project-${i}/bot.py`, main, (err) => {
            console.log(chalk.greenBright('[*] Writing to bot.py file'))
        });

        fs.writeFile(`bot-project-${i}/lib/commands/test.py`, testFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to test.py file'))
        });

        fs.writeFile(`bot-project-${i}/lib/utils/help.py`, helpFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to help.py file'))
        });

        fs.writeFile(`bot-project-${i}/launch.py`, launchFile, (err) => {
            console.log(chalk.greenBright('[*] Writing to launch.py file'))
        })

        const pathProject = `bot-project-${i}`;
        openExplorer(pathProject, err => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("Opened bot project folder!")
            }
        });

    console.log(chalk.greenBright("[!] Success! Opened bot project folder!")) 
    }
}

if (Selection == 3) {
    console.log(chalk.greenBright('[*] TypeScript support is coming soon! You can use JavaScript and Python for now'))
}