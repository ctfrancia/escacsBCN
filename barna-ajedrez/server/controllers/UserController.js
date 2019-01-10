const writeToNewUserDB = require('../models/UserModels/CreateNewUserModel');

module.exports.createNewUser = async function createNewUser(ctx) {
  try {
    await writeToNewUserDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};


module.exports.signinUser = async (ctx) => {

};

module.exports.deleteUser = async (ctx) => {

};

module.exports.updateUser = async (ctx) => {

};