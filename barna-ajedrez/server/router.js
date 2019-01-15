const Router = require('koa-router');
const router = new Router();
const clubController = require('./controllers/ClubController');
const tournamentController = require('./controllers/TournamentController');
const userController = require('./controllers/UserController');

//Club Routes
router.post('/CreateNewClub', clubController.createNewClub);
router.get('/ClubSign-in', clubController.clubSignin);
router.delete('/DeleteClub', clubController.deleteClub);
router.put('/UpdateClub', clubController.updateClub);

//User routes
router.post('/CreateNewUser', userController.createNewUser);
router.get('/UserSign-in', userController.signinUser);
router.delete('/DeleteUser', userController.deleteUser);
router.put('/UpdateUser', userController.updateUser);

//Tournament routes
router.post('/CreateTournament', tournamentController.createTournament);
router.get('/GetTournamentList', tournamentController.getAllTournaments);
router.get('/GetTournament/:id', tournamentController.getOneTournament);
router.delete('/DeleteTournament/:id', tournamentController.deleteTournament);
router.put('/UpdateTournament', tournamentController.updateTournament);

module.exports = router;
