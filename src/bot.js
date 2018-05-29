import Discord from 'discord.js';

import server from './json/server.json';

const client = new Discord.Client();

/**
 * @param {Discord.Message} message
 */
const handleMessage = (message) => {
  const { voiceChannel } = message.member;

  if (message.content.startsWith('vitas')) {
    message.channel.send(`Joining ${voiceChannel}`);

    // change to async
    voiceChannel.join()
      .then((connection) => {
        console.log('Connected!');

        const dispatcher = connection.playArbitraryInput(`${server.url}vitas.wav`);

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
};

const botStart = async (token) => {
  await client.login(token);
  client.on('message', handleMessage);
};

export default botStart;
