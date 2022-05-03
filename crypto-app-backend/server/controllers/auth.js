const Validator = require('../utils/validator');
const { register: registerSchema } = require('../dto-schemas');
const { User: UserService } = require('../services');

const register = async (req, res) => {
  try {
    const { body: data } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: registerSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await UserService.register(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  register,
};
