const changePassword = {
  title: 'change password of user',
  description: 'Defines the structure for HTTP PUT request body',
  type: 'object',
  properties: {
    publicId: {
      type: 'string',
      description: 'unique reference of user',
      format: 'uuid',
    },
    username: {
      type: 'string',
      description: 'username of a user',
    },
    oldpassword: {
      type: 'string',
      description: 'password of a user',
    },
    newpassword: {
      type: 'string',
      description: 'password of a user',
    },
  },
  required: [ 'publicId', 'username', 'oldpassword', 'newpassword' ],
  errorMessage: {
    required: {
      publicId: 'Parameter: publicId is required in the body.',
      username: 'Parameter: username is required in the body.',
      oldpassword: 'Parameter: oldpassword is required in the body.',
      newpassword: 'Parameter: newpassword is required in the body.',
    },
    properties: {
      publicId: 'Parameter: publicId should be valid uuid.',
      username: 'Parameter: username should be valid uuid.',
      oldpassword: 'Parameter: oldpassword should be valid uuid.',
      newpassword: 'Parameter: newpassword should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = changePassword;
