const Discord = require("discord.js");
const client = new Discord.Client();

// Getting secret token from ENV
const token = process.env.DISCORD_TOKEN;

// Checking if token is set
if(typeof token === 'undefined') {
  // Use the following command to export your token
  // export DISCORD_TOKEN=secret-token-here
  console.error('Set DISCORD_TOKEN env variable with your Discord API token');
  process.exit(1);
}

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(token);