const {
  createCategory, deleteCategory, getByIdCategory, getCategory,
} = require('../controllers/category');

module.exports = (router) => {
  router.post('/category/create', createCategory);
  router.delete('/category/:publicId/delete', deleteCategory);
  router.get('/category/:categoryPublicId', getByIdCategory);
  router.get('/category', getCategory);
};
