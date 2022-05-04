const getByUserIdPost = {
  title: 'get post by id',
  description: 'Defines the structure for HTTP DELETE request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of post',
      format: 'uuid',
    },
  },
  required: [ 'publicId' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = getByUserIdPost;
