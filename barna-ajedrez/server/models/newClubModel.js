const CONFIG = require('../config');
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
const Club = sequelize.define('club', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nameOfClub: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  organizerName: {
    type: Sequelize.STRING,
  },
  clubNumber: {
    type: Sequelize.INTEGER,
  },
  clubEmail: {
    type: Sequelize.STRING,
  },
  languages: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  clubExtras: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  clubWebsite: {
    type: Sequelize.STRING,
  },
  additionalInfo: {
    type: Sequelize.TEXT,
  },
  dateRegistered: {
    type: Sequelize.DATE,
  },
});
module.exports = writeToNewClubDB = (ctx) => {

  const { ctx.request.body } = club;
  const date = Date.now();
  const newClub = new Club
    .build({ 
      nameOfClub: `${club.name}`, 
      location: `${club.location}`, 
      organizerName: `${club.organizerName}` ,
      clubNumber: `${club.clubNumber}`,
      clubEmail: `${club.clubEmail}`,
      languages: `${club.languages}`,
      extras: `${club.extras}`,
      website: `${club.website}`,
      additionalInfo: `${club.additionalInfo}`,
      dateRegistered: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
};
