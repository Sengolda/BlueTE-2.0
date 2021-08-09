import discord
from discord.ext import commands
from discord.ext.commands.help import MinimalHelpCommand

class SubbedHelpCmd(commands.MinimalHelpCommand):
    def __init__(self, **options):
        super().__init__(**options)

    async def send_pages(self):
        destination = self.get_destination()
        for page in self.paginator.pages:
            embed = discord.Embed(
                description = page,
                color=discord.Color.blue()
            )

            await destination.send(embed=embed)

class HelpCog(commands.Cog):
    def __init__(self, bot):
        self._original_help_command = bot.help_command
        bot.help_command = SubbedHelpCmd()
        bot.help_command.cog = self
        
    def cog_unload(self):
        self.bot.help_command = self._original_help_command

def setup(bot):
    bot.add_cog(HelpCog(bot))