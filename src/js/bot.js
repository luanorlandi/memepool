import Discord from 'discord.js';

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

const botStart = async (token) => {
  try {
    await client.login(token);
    client.on('message', handleMessage);
  } catch (error) {
    console.error(error);
  }
};

export default botStart;
