class Bot {
  constructor (token) {
    this.token = token;
  }

  run() {
    const Discord = require("discord.js");
    const client = new Discord.Client();

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