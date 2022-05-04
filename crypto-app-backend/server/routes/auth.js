const {
  register, login, forgetPassword, deleteUser, getByPublicId, getUsers,
} = require('../controllers/auth');

module.exports = (router) => {
  router.get('/users/:publicId', getByPublicId);
  router.get('/users', getUsers);
  router.post('/register', register);
  router.post('/login', login);
  router.put('/login/:publicId', forgetPassword);
  router.delete('/login/:publicId/delete', deleteUser);
};
