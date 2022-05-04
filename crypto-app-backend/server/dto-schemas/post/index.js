const createPost = require('./create-post');
const updatePost = require('./update-post');
const deletePost = require('./delete-post');
const getByPublicIdPost = require('./get-by-id-post');
const getByUserIdPost = require('./get-by-user-id-post');

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getByPublicIdPost,
  getByUserIdPost,
};
