import { combineReducers } from 'redux';

const defaultState = {
  tournaments: [],
  auth_token: false
};

const addTournamentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return {
        tournaments: [...state.tournaments, action.tournament]
      }

    default:
      return state;
  }
};

const fetchTournamentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_TOURNAMENT_LIST':
      return {
        state
      };
    default:
      return state;
  }
};

const updateTournamentListReducer = (state = defaultState, action) => {

  console.log('update tournament list reducer', action.tournaments);

  switch (action.type) {
    case 'UPDATE_TOURNAMENT_LIST':
      return {
        tournaments: [...state.tournaments, action.tournaments]
      };

    default:
      return state;
  }
};

const appReducers = combineReducers({
  addTournament: addTournamentReducer,
  fetchTournaments: fetchTournamentsReducer,
  updateTournamentList: updateTournamentListReducer,
});

export default appReducers;
