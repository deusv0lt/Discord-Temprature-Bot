
const Discord = require("discord.js");
const config = require("./config.json");
const si= require("systeminformation")
const client = new Discord.Client();

const prefix = "_";

client.on("message", function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "say") {
        si.cpuTemperature() 
           .then(data => message.reply(`CPU: ${data.max} C`))
           .catch(error => console.error(error));
        si.graphics() 
           .then(data => message.reply(`GPU: ${data.controllers[0].temperatureGpu} C`))
           .catch(error => console.error(error));   
    }

});


client.login(config.BOT_TOKEN);