const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

if(message.content.startsWith(prefix + "google")) {
    let google = args.slice(1).join('+');
    let link = `https://www.google.com/search?q=` + google;
	message.channel.send(link);
}

client.login('NDYzNDYwMjUzODYyODU0Njc2.Dhwugw.819QwvW3tiT_9LUy6JERiyIhjjo');
