const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "?"

client.on('messageCreate', message => {
  if (message.content === 'Kas') {
    message.channel.send('"Du kan väl vänta med att lämna tills jag har luggit med denna saken" - Kas 28/12/2021');
  }
});

client.login('OTI1MTg4MTI4MDI3ODY1MTI4.Ycpelg.J76SUMKaJaLzsAmZ_yJw7yN7zko');
