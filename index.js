const Discord = require('discord.js')
const client = new Discord.Client()
var generalChannel = client.channels.cache.get("481170353670979587")

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    //receivedMessage.react('\:fluga:');

    const reactionEmoji = receivedMessage.guild.emojis.cache.find(emoji => emoji.name === 'fluga');
	  receivedMessage.react(reactionEmoji);
    
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTU4NzAyNDIxMTY1OTk4MTE1.D3avAw.r9n6QP2idWgCLSZzUyHXy8GoNa8"

client.login(bot_secret_token)