import discord
from discord.ext import commands
import aiosqlite
from discord.ext.commands.help import MinimalHelpCommand
from lib.config import prefix
from lib.config import token

class BotBase(commands.Bot):
    def __init__(self):
        self.PREFIX = prefix.PREFIX
        self.description = "Subclassed!"
        self.exts = [
            'lib.commands.test', 
            'lib.utils.help'
            ]
        super().__init__(
            command_prefix=self.PREFIX,
            description=self.description)

        for cogs in self.exts:
            self.load_extension(cogs)

    async def on_ready(self):
        print(f"Logged in as {self.user}")

    def run(self):
        super().run(token.TOKEN)