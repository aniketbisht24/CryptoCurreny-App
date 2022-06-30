const { v1: uuidV1 } = require('uuid');
const bcrypt = require('bcrypt');
const { sequelize, user: UserModel, post: PostModel } = require('../database');

const register = async (payload) => {
  try {
    const { username, password } = payload;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const transaction = await sequelize.transaction();

    const userResponse = await UserModel.findOne({
      where: { user_name: username },
      transaction,
      lock: transaction.LOCK.UPDATE,
    });

    if (userResponse) {
      await transaction.rollback();

      return { errors: [ { name: 'user', message: 'user already exists' } ] };
    }

    UserModel.create({
      public_id: uuidV1(),
      user_name: username,
      password: hashedPassword,
    });

    await transaction.commit();

    return { doc: { name: 'user', message: 'successfully created' } };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const login = async (payload) => {
  try {
    const { username, password } = payload;

    const userResponse = await UserModel.findOne({
      where: { user_name: username },
    });

    if (userResponse) {
      const { dataValues } = userResponse;

      const { password: validPassword, ...data } = dataValues;
      const validate = await bcrypt.compare(password, validPassword);

      if (validate) {
        return { doc: data };
      }

      return { doc: [ { name: 'password', message: 'incorrect password.' } ] };
    }

    return { errors: [ { name: 'username', message: 'no such username is registered.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const changePassword = async (payload) => {
  try {
    const {
      username, oldpassword, newpassword, publicId,
    } = payload;

    const userResponse = await UserModel.findOne({
      where: { public_id: publicId },
    });

    if (userResponse) {
      const { dataValues: { user_name: userName, password: validPassword } } = userResponse;

      if (userName === username) {
        const validate = await bcrypt.compare(oldpassword, validPassword);

        if (validate) {
          const salt = await bcrypt.genSalt(10);

          const hashedPassword = await bcrypt.hash(newpassword, salt);

          UserModel.update({
            password: hashedPassword,
          }, { where: { public_id: publicId } });

          return { doc: [ { name: 'password', message: 'password changed successfully.' } ] };
        }

        return { errors: [ { name: 'password', message: 'incorrect old password.' } ] };
      }

      return { errors: [ { name: 'username', message: 'incorrect credentials.' } ] };
    }

    return { errors: [ { name: 'username', message: 'no such username is registered.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const deleteUser = async (payload) => {
  try {
    const { publicId } = payload;

    const userResponse = await UserModel.findOne({
      where: { public_id: publicId },
      include: [
        {
          model: PostModel,
        },
      ],
    });

    if (userResponse) {
      UserModel.destroy({ where: { public_id: publicId } });

      return { doc: [ { name: 'user', message: 'user deleted successfully.' } ] };
    }

    return { errors: [ { name: 'public', message: 'no such user exists against this publicId.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getByPublicId = async (payload) => {
  try {
    const { publicId } = payload;

    const userResponse = await UserModel.findOne({
      where: { public_id: publicId },
      include: [
        {
          model: PostModel,
        },
      ],
    });

    if (userResponse) {
      const { dataValues } = userResponse;
      const { password, ...data } = dataValues;

      return { doc: data };
    }

    return { errors: [ { name: 'public', message: 'no such user exists against this publicId.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

const getUsers = async () => {
  try {
    const usersResponse = await UserModel.findAll({});

    if (usersResponse) {
      const doc = usersResponse.map((user) => {
        const { dataValues } = user;
        const { password, ...data } = dataValues;

        return data;
      });

      return { doc };
    }

    return { errors: [ { name: 'public', message: 'no such user exists against this publicId.' } ] };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

module.exports = {
  register,
  login,
  changePassword,
  deleteUser,
  getByPublicId,
  getUsers,
};
