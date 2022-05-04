const { v1: uuidV1 } = require('uuid');
const { sequelize, user: UserModel, post: PostModel } = require('../database');

const createPost = async (payload) => {
  try {
    const {
      username, title, desc, category,
    } = payload;

    const userResponse = await UserModel.findOne({
      where: { user_name: username },
    });

    if (userResponse) {
      const { dataValues: { id: userId } } = userResponse;

      await PostModel.create({
        public_id: uuidV1(),
        title,
        desc,
        category,
        user_id: userId,
      });

      return { doc: 'blog successfully created' };
    }

    return { errors: { name: 'user', message: 'invalid user' } };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const updatePost = async (payload) => {
  try {
    const {
      publicId, username, title, desc, category,
    } = payload;

    const userResponse = await UserModel.findOne({
      where: { user_name: username },
    });

    if (userResponse) {
      const { dataValues: { id: userId } } = userResponse;

      const postResponse = await PostModel.findOne({
        where: { public_id: publicId },
      });

      if (postResponse) {
        await PostModel.update({
          public_id: uuidV1(),
          title,
          desc,
          category,
          user_id: userId,
        }, { where: { public_id: publicId } });

        return { doc: 'blog successfully updated' };
      }

      return { errors: { name: 'post', message: 'no such post to that user exists' } };
    }

    return { errors: { name: 'user', message: 'invalid user' } };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const deletePost = async (payload) => {
  try {
    const { publicId } = payload;

    PostModel.destroy({ where: { public_id: publicId } });

    return { doc: [ { name: 'post', message: 'post deleted successfully.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getByIdPost = async (payload) => {
  try {
    const { publicId } = payload;

    const postResponse = await PostModel.findOne({
      where: { public_id: publicId },
    });

    if (postResponse) {
      const { dataValues } = postResponse;
      const { ...data } = dataValues;

      return { doc: data };
    }

    return { errors: [ { name: 'publicId', message: 'no post with this id.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getByUserIdPost = async (payload) => {
  try {
    const { publicId } = payload;

    const postResponse = await UserModel.findandCountAll({
      where: { public_id: publicId },
      attributes: [ 'id' ],
      include: [ {
        order: [ 'id', 'desc' ],
        model: PostModel,
      } ],
    });

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

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getByIdPost,
  getByUserIdPost,
};
