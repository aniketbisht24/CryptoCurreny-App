const createPost = {
  title: 'creation of post',
  description: 'Defines the structure for HTTP POST request body',
  type: 'object',
  properties: {
    username: {
      type: 'string',
      description: 'unique reference of user',
    },
    title: {
      type: 'string',
      description: 'title of a post',
    },
    desc: {
      type: 'string',
      description: 'description of a post',
    },
    categories: {
      type: 'string',
      description: 'category of a post',
      enum: [ 'Crypto-Currency', 'Block-Chain', 'NFT', 'Mining' ],

    },
  },
  required: [ 'username', 'title', 'desc', 'categories' ],
  errorMessage: {
    required: {
      username: 'Parameter: username is required in the body.',
      title: 'Parameter: title is required in the body.',
      desc: 'Parameter: desc is required in the body.',
      categories: 'Parameter: categories is required in the body.',
    },
    properties: {
      username: 'Parameter: username should be valid uuid.',
      title: 'Parameter: title should be valid string.',
      desc: 'Parameter: desc should be valid string.',
      categories: 'Parameter: categories should be valid string.',
    },
  },
  additionalProperties: false,
};

module.exports = createPost;
