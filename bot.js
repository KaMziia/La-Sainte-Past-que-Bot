const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('Pastèque');
  	}
});

client.on('presenceUpdate', (oldMember,newMember) => {
    console.log(' oldMumber speaking'+oldMember.speaking+' nick '+oldMember.displayName);
    console.log(' newMember speaking'+newMember.speaking+' nick '+newMember.displayName);
});

client.on('guildMemberAdd', member => {
    console.log('new member joinedAt '+ member.joinedAt);
    console.log('new member joinedTimestamp '+ member.joinedTimestamp);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
