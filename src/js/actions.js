/* eslint-disable no-unused-vars */
import Discord from 'discord.js';
/* eslint-enable no-unused-vars */

import { serverUrl } from './env';
import commands from '../json/commands.json';

/**
 * @param {Discord.Message} message
 */
const showHelp = (message) => {
  const entries = Object.entries(commands);
  const commandsList = entries.reduce((accumulator, [key, value]) => {
    const description = value.description ? ` *${value.description}*` : '';

    return accumulator === '' ?
      `**${key}**${description}` :
      `${accumulator}\n**${key}**${description}`;
  }, '');

  message.channel.send(commandsList);
};

/**
 * @param {Discord.Message} message
 */
const leaveVoiceChannel = (message) => {
  const { voiceChannel } = message.member;
  voiceChannel.leave();
};

/**
 * @param {Discord.Message} message
 * @param {Object} command
 * @param {string} command.file
 */
const playAudio = async (message, command) => {
  const { voiceChannel } = message.member;
  const { file } = command;

  try {
    const connection = await voiceChannel.join();
    connection.playArbitraryInput(`${serverUrl}${file}`);
  } catch (error) {
    console.error(error);
  }
};

const actions = {
  playAudio,
  leaveVoiceChannel,
  showHelp,
};

export default actions;
