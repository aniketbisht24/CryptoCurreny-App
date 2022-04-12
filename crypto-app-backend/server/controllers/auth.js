// const Validator = require('../utils/validator');

const register = async (req, res) => {
  try {
    const { body } = req;

    return body;
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  register,
};
