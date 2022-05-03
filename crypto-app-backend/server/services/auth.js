const { v1: uuidV1 } = require('uuid');
const bcrypt = require('bcrypt');
const { sequelize, user: UserModel } = require('../database');

const register = async (payload) => {
  try {
    const { username, password } = payload;

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
      password,
    });

    await transaction.commit();

    return { doc: 'successfully created' };
  } catch (err) {
    return { errors: [ { name: 'transaction', message: 'transaction failed.' } ] };
  }
};

module.exports = {
  register,
};
