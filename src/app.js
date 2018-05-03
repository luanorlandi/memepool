import token from './token';
import Bot from './bot';

if (typeof token === 'undefined') {
  console.error('Set DISCORD_TOKEN env variable with your Discord API token');
  exit(1);
}

const bot = new Bot(token);

bot.run();
