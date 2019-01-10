const CONFIG = require('../../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chessdb', `${CONFIG.duser}`, `${CONFIG.dpass}`, {
  host: 'localhost',
  dialect: 'postgres',
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
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
  documentOfTournament: {
    type: Sequelize.BLOB('long'), // not sure about this as it is going to be a document
  },
  dateCreated: {
    type: Sequelize.DATE,
  },
});

module.exports = writeToNewTournamentDB = (ctx) => {
  const { ctx.request.body } = tournament;
  const date = Date.now();
  const newTournament = new Tournament
    .build({
      clubCreated: `${tournament.clubCreated}`,
      location: `${tournament.location}`,
      clubPhone: `${tournament.clubPhone}`,
      clubEmail: `${tournament.clubEmail}`,
      startDate: `${tournament.startDate}`,
      endDate: `${tournament.endDate}`,
      additionalInfo: `${tournament.additionalInfo}`,
      documentOfTournament: `${tournament.documentOfTournament}`,
      additionalInfo: `${tournament.additionalInfo}`,
      dateRegistered: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
};
