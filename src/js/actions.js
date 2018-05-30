/* eslint-disable no-unused-vars */
import Discord from 'discord.js';
/* eslint-enable no-unused-vars */

import server from '../json/server.json';

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
    connection.playArbitraryInput(`${server.url}${file}`);
  } catch (error) {
    console.error(error);
  }
};

/**
 * @param {Discord.Message} message
 */
const leaveVoiceChannel = (message) => {
  const { voiceChannel } = message.member;
  voiceChannel.leave();
};

const actions = { playAudio, leaveVoiceChannel };

export default actions;
