const writeToNewClubDB = require('../models/ClubModel');

module.exports.createNewClub = async ctx => {
  try {
    ctx.response.body = await writeToNewClubDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};

module.exports.clubSignin = async ctx => {};

module.exports.deleteClub = async ctx => {};

module.exports.updateClub = async ctx => {};
