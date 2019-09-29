import config from '../config';

// Truncate text and add [...].
function truncateMessage(message, maxLength) {
  return `${message.slice(0, maxLength)} ...`;
}

// Adds timestamp to each message. Should this really be handled client side?
function addTimestamp(time = Date.now()) {
  const added = new Date(Number(time));
  const now = new Date();
  const difference = now - added;
  let timestamp;

  // Is there a new day? Return date added.
  const days = new Date(difference).getDate();
  if (days >= 2) {
    return (timestamp = `${added.toLocaleDateString()}`);
  }

  // Else calculate hours or minutes.
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  if (hours > 0 && hours < 24) {
    timestamp = `${hours} hours ago`;
  } else if (hours === 0 && minutes === 0) {
    timestamp = `just now`;
  } else if (hours <= 1) {
    timestamp = `${minutes} minutes ago`;
  } else {
    timestamp = '';
  }
  return timestamp;
}

// Self explanatory.
function charCounter(inputCount = 0, maxLength) {
  inputCount = inputCount ? inputCount.length : 0;
  return `${inputCount} / ${maxLength}`;
}

// Trim text. Strip "Network error:", "Graphql error:" etc.
const trimErrorMessage = error => {
  if (!error) return '';
  let index = [...error].indexOf(':');
  if (index < 0) {
    return error;
  }
  error = error.substring(index + 2);
  return error;
};

// Self explanatory.
// This is later passed as className
const shouldMessageExpand = (cardContent = '') =>
  cardContent && cardContent.length > config.cardContentLength
    ? `expanded`
    : '';

// Used by input compoents.
const forwardOnEnter = (e, step, setStep, availableInputs) => {
  const { key, shiftKey, target } = e;

  // If user holding shift and enter, return early.
  if (!shiftKey && key === 'Enter') {
    // Else prevent default on enter button, return the next form stage
    e.preventDefault();
    if (step.count !== availableInputs.length - 1) {
      setStep({
        count: step.count + 1,
        name: availableInputs[step.count]
      });
    }
    // Adds focus to input. Otherwise user have to do focus themselves. :(
    target.focus();
  }
  return;
};

// Create an handsome looking URL.
function generateHandsomeUrl(url) {
  const regex = new RegExp(/[ ]|[0-9]|[^aeiou]+/g);
  let newUrl = url.replace(regex, 'ou');
  newUrl = 'd' + newUrl;
  return newUrl;
}

function getUserToken(cookieName) {
  const token = document.cookie
    .split(';')
    .find(cookie => cookie.trim().startsWith(cookieName));
  return token;
}

function removeUserToken() {
  const cookieName = 'userToken=';
  let cookie = getUserToken(cookieName);
  cookie = `${cookie.replace(
    cookie.substring(cookieName.length)
  )};expires=${new Date(Date.now() - 1)}`;
  document.cookie = cookie;
}

// Also make some nicer calculations. There should be a number between -99%-100%.
function userApproval(messages = []) {
  const approvalRate = messages.reduce((rate, message) => {
    return (rate -= message.dislikes / messages.length);
  }, 100);
  return approvalRate;
}

function checkMessageForTags() {
  return new RegExp(/(#[A-Za-z0-9-_]+)(?:#[A-Za-z0-9-_]+)*/gi);
}

export {
  trimErrorMessage,
  charCounter,
  addTimestamp,
  truncateMessage,
  shouldMessageExpand,
  forwardOnEnter,
  generateHandsomeUrl,
  getUserToken,
  removeUserToken,
  userApproval,
  checkMessageForTags
};
