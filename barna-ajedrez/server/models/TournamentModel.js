const CONFIG = require('../config');
const moment = require('moment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});

const Tournament = sequelize.define('tournament', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nameOfTournament: {
    type: Sequelize.STRING
  },
  clubCreated: {
    type: Sequelize.BOOLEAN
  },
  location: {
    type: Sequelize.STRING
  },
  clubPhone: {
    type: Sequelize.INTEGER
  },
  clubEmail: {
    type: Sequelize.STRING
  },
  startDate: {
    type: Sequelize.DATE
  },
  additionalInfo: {
    type: Sequelize.TEXT
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

module.exports.writeToNewTournamentDB = ctx => {
  const tInfo = ctx.request.body;
  console.log(
    'dfkjgal;kjglkwjrglkhrlkejhglkwjehrlkjhwlkrjhljwhtlekrjhtlwjerhtlwjhrtlkjwh',
    tInfo.nameOfTournament
  );
  moment.locale('es');


  const answer = Tournament.findOrCreate({
    where: {
      nameOfTournament: tInfo.nameOfTournament
    },
    defaults: {
      nameOfTournament: tInfo.nameOfTournament,
      clubCreated: tInfo.clubCreated,
      location: tInfo.location,
      clubPhone: tInfo.clubPhone,
      clubEmail: tInfo.clubEmail,
      startDate: tInfo.startDate,
      additionalInfo: tInfo.additionalInfo
    }
  }).spread((t, created) => {
    console.log('asdfasdfasdfasdfa', t);

    console.log(t.get({ plain: true }));

    console.log('THIS IS IF IT IS CREATED', created);

    return created;
  });
  return answer;
};

exports.deleteTournament = id => {
  //return Tournament.findAll().then(tournaments => console.log(tournaments));
  //here we will find the tournament by id and delete it from SB
};

exports.fetchAllTournaments = () => {

  const payload = Tournament
    // .findOrCreate()
    // .then(el => {
    //   console.log(el);

    // })
    .findAll()
    .then(tournaments => {
      console.log('THIS IS THE TOURNAMENTSASDFHASDHFAHSDFKJAFKDSJFLAKSJDFLKAJSDF', tournaments);
      return tournaments;
    });
  return payload;
};
exports.updateTournament = id => {};

exports.fetchOneTournament = id => {};