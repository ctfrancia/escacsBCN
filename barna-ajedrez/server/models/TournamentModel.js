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
    type: Sequelize.STRING,
    allowNull: false
  },
  clubCreated: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING
  },
  clubPhone: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  clubEmail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startDate: {
    type: Sequelize.STRING,
    allowNull: false
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
    // console.log('asdfasdfasdfasdfa', t);

    console.log(t.get({ plain: true }));

    console.log('THIS IS IF IT IS CREATED', created);

    return created;
  });
  return answer;
};

exports.deleteTournament = async  ctx => {
  //return Tournament.findAll().then(tournaments => console.log(tournaments));
  //here we will find the tournament by id and delete it from SB
  console.log('RECEIVED ID', ctx.params.id);
  const findId = parseInt(ctx.params.id);
  console.log('FIND ID!!!!', findId);


  const answer = await Tournament.destroy({
    where: {
      id: findId
    }
  }).then(res => {
    console.log('RES IN THE THEN STATEMENT', res);
    return res;
  })
  .catch(e => {
    console.log(e);

  });

  // console.log('DELETE ANSWER', answer);
  return answer;

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
