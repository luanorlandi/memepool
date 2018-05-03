class Bot {
  constructor (token) {
    this.token = token;
  }

  run() {
    const Discord = require("discord.js");
    const client = new Discord.Client();
    
    if (typeof token === 'undefined') {
      console.error('Set DISCORD_TOKEN env variable with your Discord API token');
      return;
    }
    
    client.on("ready", () => {
      console.log("I am ready!");
    });
    
    client.on("message", (message) => {
      if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
      }
    });
    
    client.login(this.token);
  }
}

export default Bot;