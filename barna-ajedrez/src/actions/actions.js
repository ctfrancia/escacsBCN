
//I think this will be ok, store the tournament as an object.
export const addNewTournament = tournament => ({
  type: 'ADD_NEW_TOURNAMENT',
  tournament,
});

export const updateTournamentList = () => ({
  type: 'UPDATE_TOURNAMENT_LIST'
});
