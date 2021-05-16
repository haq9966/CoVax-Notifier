require('dotenv').config();
const fetch = require('node-fetch');
const { Client } = require('discord.js');
const PREFIX="*";
 
const client= new Client();
client.on('ready', () => {
console.log(`${client.user.username} has logged in`)
});
client.on('message', async(message) => {
    console.log(`${message.author.tag} sent ${message.content}`)
    if (message.content === "1") {message.reply(`hi`)}
    if (message.content === "2") {message.reply(`hello`)}
    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)  
        .split(/\s+/);
    if (CMD_NAME === 'check')
    {message.channel.send('checking for avialability')}
    }
    if (message.content === "5") {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
	}
    
 });
client.login(process.env.DISCORDJS_BOT_TOKEN); 
