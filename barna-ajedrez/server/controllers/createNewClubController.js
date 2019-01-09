const writeToNewClubDB = require('../models/newClubModel');


module.exports.newClubCreation = async function newClubCreation(ctx) {

  try {
    ctx.response.body = await writeToNewClubDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};
