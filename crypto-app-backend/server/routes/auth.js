const { register, login } = require('../controllers/auth');

module.exports = (router) => {
  router.post('/register', register);
  // router.get('/login', login);
};
