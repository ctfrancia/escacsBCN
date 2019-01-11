const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  }
});
console.log(CONFIG.duser);

const User = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  fName: {
    type: Sequelize.STRING,
  },
  lName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  neighborhood: {
    type: Sequelize.STRING,
  },
  club: {
    type: Sequelize.STRING,
  },
  dateCreated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  clubOwner: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
});

module.exports.writeToNewUserDB = (ctx) => {
  const userInfo = ctx.request.body;

  console.log(ctx.request.body);

  const answer = User.findOrCreate({
    where: {
      email: userInfo.email
    },
    defaults:{
      fName:userInfo.fName,
      lName:userInfo.lName,
      password:userInfo.password,
      email:userInfo.email,
      neighborhood:userInfo.neighborhood,
      club:userInfo.club,
    }
}).spread((user, created) => {
  console.log(user.get({
    plain:true
  }));

  return created;
});

  return answer;

};
exports.signIntoDB = (id) => {
const userID = id;

  try {

  } catch (e) {
    console.log(e);
  }
};

exports.deleteUserinDb = (id) => {
const userID = id;

  try {

  } catch (e) {
    console.log(e);
  }
};

exports.editUserInDb = (id) => {
const userID = id;

  try {

  } catch (e) {
    console.log(e);
  }
};