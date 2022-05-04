const register = require('./register');
const login = require('./login');
const changePassword = require('./change-password');
const deleteUser = require('./deleteUser.js');
const getByPublicId = require('./getByPublicId');

module.exports = {
  register, login, changePassword, deleteUser, getByPublicId,
};
