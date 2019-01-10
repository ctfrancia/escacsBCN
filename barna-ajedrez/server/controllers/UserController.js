const {
  writeToNewUserDB,
  deleteUserinDb,
  editUserInDb,
  signIntoDB
} = require('../models/UserModel');

module.exports.createNewUser = async function createNewUser(ctx) {
  try {
    await writeToNewUserDB(ctx);
    ctx.response.status = 201;
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
