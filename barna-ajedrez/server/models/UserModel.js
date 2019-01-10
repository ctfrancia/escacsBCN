const CONFIG = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('ajedrezdb', CONFIG.duser, CONFIG.dpass, {
  host: 'localhost',
  dialect: 'postgres',
});
console.log(CONFIG.duser);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('users', {
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
  },
});

module.exports.writeToNewUserDB = (ctx) => {
  const user = ctx.request.body;
  const date = Date.now();
  const newuser = new User
    .build({
      fName: `${user.fName}`,
      lName: `${user.lName}`,
      password: `${user.password}`,
      email: `${user.email}`,
      neighborhood: `${user.neighborhood}`,
      club: `${user.club}`,
      dateCreated: `${date}`,
    })
    //saving to DB
    .save()
    .then(() => console.log('Created successfully'))
    .catch(err => console.log('OOPS!', err));
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