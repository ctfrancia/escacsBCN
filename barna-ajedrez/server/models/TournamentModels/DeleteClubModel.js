const dinfo = require('../../config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('chessdb', `${dinfo.duser}`, `${dinfo.dpass}`, {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports.deleteTournament = (id) => {
  //return Tournament.findAll().then(tournaments => console.log(tournaments));
  //here we will find the tournament by id and delete it from SB
};
