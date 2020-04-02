const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "-sleep") {
    msg.channel.send({ files: ['./source/sleep.jpg'] });
  }
  else if (msg.content === "-sleeping") {
    msg.channel.send({ files: ['./source/sleeping.jpg'] });
  }

  else if (msg.content === "-threat") {
    msg.channel.send({ files: ['./source/threat.jpg'] });
  }

  else if (msg.content === "-help") {
    msg.reply("\n 3 options : \n *-sleeping* \n *-sleep* \n *-threat* \n");
  }
});

client.login("Njk1MzQyMjQ5NDg3MTA2MDU4.XoYySg.ikJmK1HdgNPgGW9hHJ_h0REUVEI");