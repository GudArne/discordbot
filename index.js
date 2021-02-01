
const Discord = require('discord.js');
const client = new Discord.Client();
var generalChannel = client.channels.cache.get("481170353670979587");
//var envKey = process.env.laban

client.once('ready', () => {
	console.log('Ready!');
client.user.setActivity('flugor', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);

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
if(receivedMessage.content == 'rolf'){
  receivedMessage.channel.send("", {files: ["https://cdn.discordapp.com/attachments/481170353670979587/805781624825708584/roffyf.JPG"]});
}
if(receivedMessage.content == 'little rolf'){
  receivedMessage.channel.send("https://cdn.discordapp.com/emojis/639552997415845901.png?v=1");
}
if(receivedMessage.content == 'bögälg'){
  receivedMessage.channel.send("", {files: ["https://cdn.discordapp.com/attachments/481170353670979587/805793574079692820/21433208_319999991799291_4175105810900962325_n.jpg"]});
}
if(receivedMessage.content == 'karibu school'){
  receivedMessage.channel.send("", {files: ["https://i.gyazo.com/d6cd8dced076ae164dff7949a9149b76.png"]});
}


    const reactionEmoji = receivedMessage.guild.emojis.cache.find(emoji => emoji.name === 'fluga');
	  receivedMessage.react(reactionEmoji);
    
});

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
//bot_secret_token = envKey

client.login(process.env.laban.toString());