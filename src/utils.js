// Truncate text and add [...]
export function truncatingText(message, maxLength) {
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
