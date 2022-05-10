const {
  register, login, forgetPassword, deleteUser, getByPublicId, getUsers, uploadProfilePic,
} = require('../controllers/auth');

const { uploadFile } = require('../utils/helper');

module.exports = (router) => {
  router.get('/users/:publicId', getByPublicId);
  router.get('/users', getUsers);
  router.post('/register', register);
  router.post('/login', login);
  router.put('/login/:publicId', forgetPassword);
  router.delete('/login/:publicId/delete', deleteUser);
  router.post('/user/upload/images', uploadFile.single('file'), uploadProfilePic);
};
