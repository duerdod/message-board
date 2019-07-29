function addUserTimestamp(context) {
  // Add cookie.
  context.res.cookie('last_message', 'tiden', {
    maxAge: process.env.NODE_ENV === 'development' ? 1000 * 60 * 60 : 90000, // 1 hour else 1,5 minutes
    httpOnly: true
  });
  return;
}

module.exports = {
  addUserTimestamp
};
