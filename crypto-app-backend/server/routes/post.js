const imagePath = require('path');
const multer = require('multer');

const {
  createPost, updatePost, deletePost, getByIdPost,
  getByUserIdPost, getPost, uploadImages,
} = require('../controllers/post');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagePath.join(__dirname, '../images/'));
  },
  filename: (req, file, cb) => {
    cb(null, 'hello');
  },
});

const upload = multer({ storage });

module.exports = (router) => {
  router.post('/blog/create', createPost);
  router.put('/blog/:publicId/update', updatePost);
  router.delete('/blog/:publicId/delete', deletePost);
  router.post('/blog', getPost);
  router.get('/blog/:blogPublicId', getByIdPost);
  router.get('/blog/userPublicId', getByUserIdPost);
  router.post('/api/upload/images', upload.single('file'), uploadImages);
};
