const Filter = require('bad-words');
const cleanWithEmojis = new Filter({ placeHolder: '💩' });

function addUserTimestamp(cookieType, context) {
  // Add cookie.
  context.res.cookie(cookieType, 'time since last post or comment', {
    maxAge: process.env.NODE_ENV === 'development' ? 9000 : 1000 * 60 * 60, // 1 hour else 1,5 minutes
    httpOnly: true
  });
  return;
}

function validateMessage(title, message, author) {
  // This is really arbitrary. Change and move to env.variables.
  const minLength = 2;
  if (title.length < minLength) {
    throw new Error('Title to short. :(');
  }
  if (message.length < minLength) {
    throw new Error('Not very much of a message.');
  }
  if (author.length <= minLength) {
    throw new Error('Your name is... to short...?');
  }
}

function sanitizer(text) {
  return cleanWithEmojis.clean(text);
}

function checkMessageForTags() {
  return new RegExp(/(#[A-Za-z0-9-_]+)(?:#[A-Za-z0-9-_]+)*/gi);
}

function extractTagsFromMessage(message) {
  const rawTags = message.match(checkMessageForTags());
  if (!rawTags) return [];
  // Tags have to be longer than 1 char. If they are,
  // replace to someting "unique" to handle on client.
  const lengthCheckedTags = rawTags.filter(tag => tag.length > 2);
  return lengthCheckedTags;
}

module.exports = {
  addUserTimestamp,
  validateMessage,
  sanitizer,
  checkMessageForTags,
  extractTagsFromMessage
};
