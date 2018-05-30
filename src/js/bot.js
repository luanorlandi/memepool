import Discord from 'discord.js';

import actions from './actions';
import commands from '../json/commands.json';
import text from '../json/text.json';

const client = new Discord.Client();

const getCommand = string => commands[string];

/**
 * @param {Discord.Message} message
 */
const handleMessage = (message) => {
  const command = getCommand(message.content);

  if (!command) {
    return;
  }

  const action = actions[command.action];
  action(message, command);
};

const botStart = async (token) => {
  try {
    await client.login(token);
    client.on('message', handleMessage);
    console.log(text.ready);
  } catch (error) {
    console.error(error);
  }
};

export default botStart;
