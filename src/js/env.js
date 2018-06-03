const nodeEnv = process.env.NODE_ENV;
const discordToken = process.env.DISCORD_TOKEN;

const serverUrl = nodeEnv === 'production' ?
  process.env.SERVER_URL :
  'http://localhost:8080/';

export { serverUrl, discordToken };
