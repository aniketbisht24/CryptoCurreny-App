const { create } = require('../controllers/post');

module.exports = (router) => {
  router.post('/blog/create', create);
  router.post('/blog/:publicId/update', create);
};
