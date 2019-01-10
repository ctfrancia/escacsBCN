const writeToNewTournamentDB = require('../models/TournamentModels/CreateNewTournamentModel');
const fetchAllTournaments = require('../models/TournamentModels/fetchAllTournamentsModel');

exports.getAllTournaments = async (ctx) => {
  try {
    ctx.response.body = await fetchAllTournaments();
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    console.log('OOPS! ', e.stack);
  }
};
module.exports.createTournament = async function postToDB(ctx) {

  try {
    await writeToNewTournamentDB(ctx);
    ctx.response.status = 201;
  } catch (e) {
    console.log(e.stack);
    ctx.response.status = 500;
  }
};

module.exports.getOneTournament = async (ctx) => {

}

module.exports.deleteTournament = async (ctx) => {

};

module.exports.updateTournament = async (ctx) => {

};