const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
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
  clubName: {
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
  password: {
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
    defaultValue: Sequelize.NOW
  },
});
module.exports.writeToNewClubDB = (ctx) => {

  const club =  ctx.request.body ;
  const date = Date.now();
  const newClub = new Club
    .build({
      clubName: `${club.name}`,
      location: `${club.location}`,
      organizerName: `${club.organizerName}` ,
      clubNumber: `${club.clubNumber}`,
      clubEmail: `${club.clubEmail}`,
      languages: `${club.languages}`,
      clubExtras: `${club.extras}`,
      clubWebsite: `${club.website}`,
      additionalInfo: `${club.additionalInfo}`,
      dateRegistered: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
};
