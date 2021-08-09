import discord
from discord.ext import commands

class Test(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(help="A test command")
    async def test(self, ctx):
        await ctx.send("Subclass test works!")

def setup(bot):
    bot.add_cog(Test(bot))