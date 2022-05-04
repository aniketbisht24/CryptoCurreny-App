const deleteUser = {
  title: 'deletion of user',
  description: 'Defines the structure for HTTP DELETE request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of user',
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

module.exports = deleteUser;
