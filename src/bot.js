import Discord from 'discord.js';

class Bot {
  constructor(token) {
    this.token = token;
  }

  run() {
    const client = new Discord.Client();

    client.on('ready', () => {
      console.log('I am ready!');
    });

    client.on('message', (message) => {
      const { voiceChannel } = message.member;

      if (message.content.startsWith('vitas')) {
        message.channel.send(`Joining ${voiceChannel}`);

        // change to async, add babel es2017
        voiceChannel.join()
          .then((connection) => {
            console.log('Connected!');

            const dispatcher = connection.playArbitraryInput('https://raw.githubusercontent.com/luanorlandi/javascript30/master/02-clock/sounds/vitas-blblbl.wav');

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

    client.login(this.token);
  }
}

export default Bot;
