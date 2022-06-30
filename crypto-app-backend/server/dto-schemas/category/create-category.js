const createCategory = {
  title: 'creation of post',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'unique reference of user',
      enum: [ 'Crypto-Currency', 'Block-Chain', 'NFT', 'Mining' ],
    },
  },
  required: [ 'name' ],
  errorMessage: {
    required: {
      name: 'Parameter: name is required in the body.',
    },
    properties: {
      name: 'Parameter: name should be valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = createCategory;
