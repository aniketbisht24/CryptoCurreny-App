const Validator = require('../utils/validator');
const {
  createPost: createPostSchema, updatePost: updatePostSchema, deletePost: deletePostSchema, getByIdPost: getByIdPostSchema,
  getByUserIdPost: getByUserIdPostSchema,
} = require('../dto-schemas');
const { Post: PostService } = require('../services');

// CREATE POSTS

const createPost = async (req, res) => {
  try {
    const { body: data } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: createPostSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await PostService.createPost(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

// UPDATE POST

const updatePost = async (req, res) => {
  try {
    const {
      body: {
        username, title, desc, category,
      }, params: { publicId },
    } = req;

    const data = {
      username, title, desc, category, publicId,
    };

    const { errors, data: validData } = Validator.isSchemaValid({ data, schema: updatePostSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await PostService.updatePost(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

// DELETE POST

const deletePost = async (req, res) => {
  try {
    const { params: { publicId } } = req;

    const { errors, data: validData } = Validator.isSchemaValid({ data: { publicId }, schema: deletePostSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await PostService.deletePost(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

// GET SPECIFIC POST

const getByIdPost = async (req, res) => {
  try {
    const { params: { blogPublicId: publicId } } = req;

    const data = { publicId };

    const { errors, data: validData } = Validator.isSchemaValid({ data: { publicId }, schema: getByIdPostSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await PostService.getByPublicIdPost(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

// GET ALL POSTS

const getByUserIdPost = async (req, res) => {
  try {
    const { params: { userPublicId: publicId } } = req;

    const data = { publicId };

    const { errors, data: validData } = Validator.isSchemaValid({ data: { publicId }, schema: getByUserIdPostSchema });

    if (errors) {
      return res.badRequest('field-validation', errors);
    }

    const { errors: registerErrors, doc } = await PostService.getByUserIdPost(validData);

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

const getPost = async (req, res) => {
  try {
    const { errors: registerErrors, doc } = await PostService.getPost();

    if (registerErrors) {
      return res.json(registerErrors);
    }

    return res.json(doc);
  } catch (error) {
    return res.serverError(error);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getByIdPost,
  getByUserIdPost,
  getPost,
};
