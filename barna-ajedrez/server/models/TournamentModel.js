const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
});

const Tournament = sequelize.define('tournament', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nameOfTournament: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  clubCreated: {
    type: Sequelize.BOOLEAN,
  },
  clubPhone: {
    type: Sequelize.INTEGER,
  },
  clubEmail: {
    type: Sequelize.STRING,
  },
  startDate: {
    type: Sequelize.DATE,
  },
  endDate: {
    type: Sequelize.DATE,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
});

module.exports.writeToNewTournamentDB = (ctx) => {
  const tournament = ctx.request.body;
  const date = Date.now();
  const newTournament = new Tournament
    .build({
      nameOfTournament: `${tournament.tournamentName}`,
      location: `${tournament.location}`,
      clubCreated: `${tournament.clubCreated}`,
      clubPhone: `${tournament.clubPhone}`,
      clubEmail: `${tournament.clubEmail}`,
      startDate: `${tournament.startDate}`,
      endDate: `${tournament.endDate}`,
      additionalInfo: `${tournament.additionalInfo}`,
      dateRegistered: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
};

exports.deleteTournament = (id) => {
  //return Tournament.findAll().then(tournaments => console.log(tournaments));
  //here we will find the tournament by id and delete it from SB
};

exports.fetchAllTournaments = () => {
  return Tournament.findAll()
    .then(tournaments => console.log(tournaments));
};
exports.updateTournament = (id) => {

};

exports.fetchOneTournament = (id) => {

}