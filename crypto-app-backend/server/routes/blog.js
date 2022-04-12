const { updateStatus, submit, getList } = require('../controllers/order');

module.exports = (router) => {
  router.post('/order/:publicId/status', updateStatus);
  router.post('/order/:publicId/submit', submit);
  router.get('/order', getList);
};
