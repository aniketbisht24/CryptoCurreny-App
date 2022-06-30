const { v1: uuidV1 } = require('uuid');
const {
  sequelize, user: UserModel, post: PostModel, category: CategoryModel,
} = require('../database');

const createCategory = async (payload) => {
  try {
    const {
      name,
    } = payload;

    await CategoryModel.create({
      public_id: uuidV1(),
      name,
    });

    return { doc: 'category successfully created' };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const deleteCategory = async (payload) => {
  try {
    const { publicId } = payload;

    CategoryModel.destroy({ where: { public_id: publicId } });

    return { doc: [ { name: 'category', message: 'category deleted successfully.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getByIdCategory = async () => {
  try {
    const postResponse = await UserModel.findandCountAll({});
    // include post model here as well
    // include category as well

    if (postResponse) {
      const { rows, count } = postResponse;
      const listBlogs = rows.map((row) => {
        const { dataValues } = row;
        const { ...data } = dataValues;

        return data;
      });

      return { doc: { count, listBlogs } };
    }

    return { errors: [ { name: 'public', message: 'no such user exists against this publicId.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getCategory = async () => {
  try {
    const categoryResponse = await CategoryModel.findAll({});

    if (categoryResponse) {
      const doc = categoryResponse.map(({ dataValues }) => dataValues);

      return { doc };
    }

    return { errors: [ { name: 'category', message: 'no category available' } ] };
  } catch (error) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getByIdCategory,
  getCategory,
};
