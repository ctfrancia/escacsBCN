
const fetchAllTournaments = require('../models/receiveAllTournamentsModel');

exports.getAllTournaments = async (ctx) => {
  try {
    ctx.response.body = await fetchAllTournaments();
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    console.log('OOPS! ', e.stack);
  }
};