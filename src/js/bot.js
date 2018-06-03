import Discord from 'discord.js';

import { discordToken } from './env';
import actions from './actions';
import commands from '../json/commands.json';

const client = new Discord.Client();

const getCommand = string => commands[string];

/**
 * @param {Discord.Message} message
 */
const handleMessage = (message) => {
  const command = getCommand(message.content);

  if (typeof command === 'undefined') {
    return;
  }

  const action = actions[command.action];
  action(message, command);
};

const botStart = async () => {
  try {
    await client.login(discordToken);
    client.on('message', handleMessage);
  } catch (error) {
    console.error(error);
  }
};

export default botStart;
