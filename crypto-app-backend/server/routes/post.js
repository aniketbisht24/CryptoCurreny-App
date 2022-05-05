const {
  createPost, updatePost, deletePost, getByIdPost, getByUserIdPost, getPost,
} = require('../controllers/post');

module.exports = (router) => {
  router.post('/blog/create', createPost);
  router.put('/blog/:publicId/update', updatePost);
  router.delete('/blog/:publicId/delete', deletePost);
  router.post('/blog', getPost);
  router.get('/blog/:blogPublicId', getByIdPost);
  router.get('./blog/userPublicId', getByUserIdPost);
};
