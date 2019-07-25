// Truncate text and add [...].
// This will probably truncate in the middle of a word. But who cares?
export function truncateMessage(message, maxLength) {
  let text = message.slice(0, maxLength);
  text += ' ...';
  return text;
}

// Adds timestamp to each message. Should this really be handled client side?
// Rewrite this. The output should be 1 minute ago, 4 hours age, until there is a new date.
export function addTimestamp(time) {
  const added = new Date(time);
  const now = new Date();
  const difference = now - added;
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const timestamp = `${hours} hours and ${minutes} minutes ago`;
  return timestamp;
}

// Self explanatory.
export function charCounter(text = 0, maxLength) {
  return `${text} / ${maxLength}`;
}
