import botStart from './js/bot';
import { serverUrl, discordToken } from './js/env';
import text from './json/text.json';

if (typeof discordToken === 'undefined') {
  console.error(text.setToken);
  process.exit(1);
}

if (typeof serverUrl === 'undefined') {
  console.error(text.setServer);
  process.exit(1);
}

botStart();
