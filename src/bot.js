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
      const voiceChannel = message.member.voiceChannel;

      if (message.content.startsWith("join")) {
        message.channel.send(`Joining ${voiceChannel}`);

        // change to async, add babel es2017
        voiceChannel.join()
          .then(connection => console.log('Connected!'))
          .catch(console.error);
      }

      if (message.content.startsWith("leave")) {
        message.channel.send(`Leaving ${voiceChannel}`);
        voiceChannel.leave();
      }
    });

    client.login(this.token);
  }
}

export default Bot;