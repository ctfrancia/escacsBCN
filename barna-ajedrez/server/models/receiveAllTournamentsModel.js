const dinfo = require('../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chessdb', `${dinfo.duser}`, `${dinfo.dpass}`, {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = fetchAllTournaments = () => {
  return Tournament.findAll()
    .then(tournaments => console.log(tournaments));
};
