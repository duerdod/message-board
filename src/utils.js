// Truncate text and add [...].
// This will probably truncate in the middle of a word. But who cares?
export function truncateMessage(message, maxLength) {
  let text = message.slice(0, maxLength);
  text += ' ...';
  return text;
}

export function addMessageTime() {
  const today = new Date();
  const messageAdded = `${today.getFullYear()}/${today.getMonth() +
    1}/${today.getUTCDate()} ${today.getHours()}:${today.getMinutes()}`;
  return messageAdded;
}

export function charCounter(text = 0, maxLength) {
  return `${text} / ${maxLength}`;
}
