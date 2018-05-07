import Discord from 'discord.js';

class Bot {
  constructor(token) {
    this.token = token;
    this.client = new Discord.Client();
  }

  login() {
    this.client.login(this.token);

    this.client.on('ready', () => {
      console.log('I am ready!');
    });
  }

  run() {
    this.client.on('message', (message) => {
      const { voiceChannel } = message.member;

      if (message.content.startsWith('vitas')) {
        message.channel.send(`Joining ${voiceChannel}`);

        // change to async, add babel es2017
        voiceChannel.join()
          .then((connection) => {
            console.log('Connected!');

            const dispatcher = connection.playArbitraryInput('http://localhost:8080/src/assets/vitas.wav');

            dispatcher.on('end', () => {
              voiceChannel.leave();
            });
          })
          .catch(console.error);
      }

      if (message.content.startsWith('leave')) {
        message.channel.send(`Leaving ${voiceChannel}`);
        voiceChannel.leave();
      }
    });
  }
}

export default Bot;
