const writeToNewTournamentDB = require('../models/newTournamentModel');

module.exports.postToDB = async function postToDB(ctx) {

  try {
    await writeToNewTournamentDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};