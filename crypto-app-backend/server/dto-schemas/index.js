const auth = require('./auth');
const post = require('./post');
const category = require('./category');

module.exports = {
  ...auth,
  ...post,
  ...category,
};
