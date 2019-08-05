import config from '../config';

// Truncate text and add [...].
// This will probably truncate in the middle of a word. But who cares?
function truncateMessage(message, maxLength) {
  let text = message.slice(0, maxLength);
  text += ' ...';
  return text;
}

// Adds timestamp to each message. Should this really be handled client side?
// Rewrite. The output should be 1 minute ago, 4 hours ago etcetc., until there is "a new day".
function addTimestamp(time) {
  const added = new Date(Number(time));
  const now = new Date();
  let timestamp;
  // Is there a new day? Return date added.

  // Else calculate hours and minutes.
  const difference = now - added;
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  if (hours > 0 && hours < 24) {
    timestamp = `${hours} hours ago`;
  } else if (hours === 0 && minutes === 0) {
    timestamp = `just now`;
  } else if (hours <= 1) {
    timestamp = `${minutes} minutes ago`;
  } else {
    timestamp = `${added.toLocaleDateString()}`;
  }
  return timestamp;
}

// Self explanatory.
function charCounter(inputCount = 0, maxLength) {
  inputCount = inputCount ? inputCount.length : 0;
  return `${inputCount} / ${maxLength}`;
}

// Trim text. Strip "Network error:", "Graphql error:" etc.
const trimErrorMessage = message => {
  var index = [...message].indexOf(':');
  var errorMessage = message.substring(index + 2);
  return errorMessage;
};

// Self explanatory.
// This is later passed to classNames.
const shouldMessageExpand = cardContent =>
  cardContent && cardContent.length > config.cardContentLength
    ? `expanded`
    : '';

// Used by addMessage compoent.
const forwardOnEnter = (e, step, setStep, availableInputs) => {
  const { key, shiftKey, target } = e;
  // If user holding shift and enter, return early.
  // Else prevent default on enter button, return the next message stage
  if (!shiftKey && key === 'Enter') {
    e.preventDefault();
    if (step.count !== availableInputs.length - 1) {
      setStep({
        count: step.count + 1,
        name: availableInputs[step.count]
      });
    }
    // Adds focus to input. Otherwise user have to do focus themselfs.
    target.focus();
  }
  return;
};

export {
  trimErrorMessage,
  charCounter,
  addTimestamp,
  truncateMessage,
  shouldMessageExpand,
  forwardOnEnter
};
