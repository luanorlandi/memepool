import botStart from './bot';
import token from './token';
import text from './json/text.json';

if (typeof token === 'undefined') {
  console.error(text.error.noToken);
  process.exit(1);
}

botStart(token);
