const Filter = require('bad-words');
const cleanWithEmojis = new Filter({ placeHolder: '💩' });

function addUserTimestamp(context) {
  // Add cookie.
  context.res.cookie('last_message', 'time since last post', {
    maxAge: process.env.NODE_ENV === 'development' ? 9000 : 1000 * 60 * 60, // 1 hour else 1,5 minutes
    httpOnly: true
  });
  return;
}

function validateMessage(title, message, author) {
  const minLength = 2;
  if (title.length < minLength) {
    throw new Error('Not very much of a title.');
  }
  if (message.length < minLength) {
    throw new Error('Not very much of a message.');
  }
  if (author.length <= 5) {
    throw new Error('Your name is to short...?');
  }
}

function sanitizer(text) {
  return cleanWithEmojis.clean(text);
}

module.exports = {
  addUserTimestamp,
  validateMessage,
  sanitizer
};
