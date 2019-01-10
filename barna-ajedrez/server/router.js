const Router = require('koa-router');
const router = new Router();
const clubController = require('./controllers/ClubController');

router.post('/CreateNewClub', clubController.newClubCreation);
router.get('/ClubSign-in', clubController.clubSignin);
router.delete('/DeleteClub', clubController.deleteClub);
router.put('/UpdateClub', clubController.updateClub);

router.post('/CreateNewUser');
router.get('/UserSign-in');
router.delete('/DeleteUser');
router.put('/UpdateUser');

router.post('/CreateTournament');
router.get('/GetTournamentList');
router.delete('/DeleteTournament');
router.put('/UpdateTournament');

module.exports = router;
