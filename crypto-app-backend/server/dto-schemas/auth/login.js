const login = {
  title: 'login of user',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    username: {
      type: 'string',
      description: 'unique reference of user',
    },
    password: {
      type: 'string',
      description: 'password of a user',
    },
  },
  required: [ 'username', 'password' ],
  errorMessage: {
    required: {
      username: 'Parameter: username is required in the body.',
      password: 'Parameter: password is required in the body.',
    },
    properties: {
      username: 'Parameter: username should be valid uuid.',
      password: 'Parameter: password should be valid uuid.',
    },
  },
  additionalProperties: false,
};

module.exports = login;
