const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
 bot.user.setGame("ArtiBOT, !help")
console.log("Le bot a bien ete connecte")
});

bot.login("Mzk5NzA3NjA1MDIwMTgwNDkw.DTRAcQ.eJFig1ZQVcjRVAIDTtcCU7wKOhg");
