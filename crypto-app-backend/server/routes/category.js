const {
  createCategory, deleteCategory, getByIdCategory,
} = require('../controllers/category');

module.exports = (router) => {
  router.post('/category/create', createCategory);
  router.delete('/category/:publicId/delete', deleteCategory);
  router.get('/category/:categoryPublicId', getByIdCategory);
};
