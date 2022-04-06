const { mergeTypeDefs } = require('@graphql-tools/merge');

const Scaler = require('./scaler');
const Comman = require('./comman');
const Sample = require('./sample');

const types = [
  Scaler,
  Comman,
  Sample,
];

module.exports = mergeTypeDefs(types);
