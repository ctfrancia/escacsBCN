const writeToNewUserDB = require('../models/newUserModel');

module.exports.createNewUser = async function createNewUser(ctx) {
  try {
    await writeToNewUserDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};
