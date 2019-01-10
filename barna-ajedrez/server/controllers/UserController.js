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


module.exports.clubSignin = async (ctx) => {

};

module.exports.deleteClub = async (ctx) => {

};

module.exports.updateClub = async (ctx) => {

};