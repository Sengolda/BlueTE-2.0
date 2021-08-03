import discord
from discord.ext import commands
import aiosqlite
import os
import sys
from config.prefix import PREFIX
from config.token import TOKEN

bot = commands.Bot(
    command_prefix=PREFIX,
    intents=discord.Intents.all()
)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

for filename in os.listdir('./commands/'):
    if filename.endswith('.py') and not filename.startswith("_"):
        bot.load_extension(f'commands.{filename[:-3]}')

bot.run(TOKEN)