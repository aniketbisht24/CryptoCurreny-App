const Validator = require('../utils/validator');
const {
  register: registerSchema, login: loginSchema, changePassword: changePasswordSchema, deleteUser: deleteUserSchema, getByPublicId: getByPublicIdSchema,
} = require('../dto-schemas');
const { Auth: AuthService } = require('../services');

const register = async (req, res) => {
  try {
    const { body: data } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: registerSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await AuthService.register(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const login = async (req, res) => {
  try {
    const { body: data } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: loginSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await AuthService.login(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { params: { publicId }, body: { username, oldpassword, newpassword } } = req;

    const data = {
      publicId, username, oldpassword, newpassword,
    };

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: changePasswordSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await AuthService.changePassword(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { params: { publicId } } = req;

    const data = { publicId };

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: deleteUserSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await AuthService.deleteUser(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const getByPublicId = async (req, res) => {
  try {
    const { params: { publicId } } = req;

    const data = { publicId };

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: getByPublicIdSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await AuthService.getByPublicId(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const { errors: registerErrors, doc } = await AuthService.getUsers();

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
  login,
  forgetPassword,
  deleteUser,
  getByPublicId,
  getUsers,
};
