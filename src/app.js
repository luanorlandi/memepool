import botStart from './js/bot';
import token from './js/token';
import text from './json/text.json';

if (typeof token === 'undefined') {
  console.error(text.setToken);
  process.exit(1);
}

botStart(token);
