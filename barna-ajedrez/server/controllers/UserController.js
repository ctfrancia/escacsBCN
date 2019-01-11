const {
  writeToNewUserDB,
  deleteUserinDb,
  editUserInDb,
  signIntoDB
} = require('../models/UserModel');

module.exports.createNewUser = async function createNewUser(ctx) {


  // console.log('user controller body: ',ctx.request.body);
  try {
    const wasWritten = await writeToNewUserDB(ctx);
    console.log('WAS WRITTEN CONST ', wasWritten);
    if (wasWritten === false) {
      ctx.response.status = 409;
    } else {
      ctx.response.status = 201;
    }
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};

module.exports.signinUser = async ctx => {
  const id = ctx.user.id;

  try {
    await signIntoDB(id);

  } catch (e) {
    console.log(e);
  }
};
module.exports.deleteUser = async ctx => {
  const id = ctx.user.id;

  try {
    await deleteUserinDb(id);

  } catch (e) {
    console.log(e);
  }
};
module.exports.updateUser = async ctx => {
  const id = ctx.user.id;

  try {
    await editUserInDb(id);
  } catch (e) {
    console.log(e);
  }
};
