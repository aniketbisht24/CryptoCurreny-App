const {
  createPost, updatePost, deletePost, getByIdPost,
  getByUserIdPost, getPost, uploadPostImages,
} = require('../controllers/post');

const { uploadFile } = require('../utils/helper');

module.exports = (router) => {
  router.post('/blog/create', createPost);
  router.put('/blog/:publicId/update', updatePost);
  router.delete('/blog/:publicId/delete', deletePost);
  router.post('/blog', getPost);
  router.get('/blog/:userPublicId/posts', getByUserIdPost);
  router.get('/blog/:blogPublicId', getByIdPost);
  router.post('/blog/upload/images', uploadFile.single('file'), uploadPostImages);
};
