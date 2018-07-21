const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bonjour') {
    	message.reply('Au revoir');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    if (message.content === 'Au revoir') {
        message. reply('Adieu'); 
    }
}) ; 
