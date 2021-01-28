
const Discord = require('discord.js');
const client = new Discord.Client();
var generalChannel = client.channels.cache.get("481170353670979587");
//var envKey = process.env.laban

client.once('ready', () => {
	console.log('Ready!');
        client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "flugor",  //The message shown
            type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });

});



client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    //if (receivedMessage.author == client.user) {
    //    return
    //}
    //if(receivedMessage.content == 'ola play replay')
    //{
    //  const timeoutObj1 = setTimeout(() => {
    //receivedMessage.channel.send('ola skip');
    //}, 3000);

    //}


    const reactionEmoji = receivedMessage.guild.emojis.cache.find(emoji => emoji.name === 'fluga');
	  receivedMessage.react(reactionEmoji);
    
});

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
//bot_secret_token = envKey

client.login(process.env.laban.toString());