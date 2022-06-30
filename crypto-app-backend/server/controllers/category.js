const Validator = require('../utils/validator');
const {
  createCategory: createCategorySchema, deleteCategory: deleteCategorySchema, getByIdCategory: getByIdCategorySchema,
} = require('../dto-schemas');
const { Category: CategoryService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { body: data } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: createCategorySchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await CategoryService.createCategory(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { params: { publicId } } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data: { publicId }, schema: deleteCategorySchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await CategoryService.deleteCategory(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const getByIdCategory = async (req, res) => {
  try {
    const { params: { userPublicId: publicId } } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data: { publicId }, schema: getByIdCategorySchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await CategoryService.getByIdCategory(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const getCategory = async (req, res) => {
  try {
    const { errors, doc } = await CategoryService.getCategory();

    if (doc) {
      return res.json(doc);
    }

    return res.json(errors);
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getByIdCategory,
  getCategory,
};
