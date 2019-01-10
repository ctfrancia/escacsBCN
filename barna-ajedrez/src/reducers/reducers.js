import { combineReducers } from 'redux';

const defaultState = {
  tournaments: [],
  authorization: {
    user: '',
    auth_token: ''
  },
  pages: {
    loading: true
  }
};

const TournamentReducer = (state = defaultState.tournaments, action) => {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return [...state, action.tournaments];

    case 'FETCH_TOURNAMENT_LIST':
      return [...state, ...action.tournaments];

    case 'UPDATE_TOURNAMENT_LIST':
      return[...state, action.tournaments];

    default:
      return state;
  }
};

const authorizationReducer = (state = defaultState.authorization, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return{
          user: `${action.username}`,
          auth_token: `${action.auth_token}`
      }
    case 'SIGN_OUT':
      return{
          user: '',
          auth_token: ''
      };

    default:
      return state;
  }
};

const pagesReducer = (state = defaultState.pages, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
          loading: true
      };

    case 'DONE_LOADING':
      return {
          loading: false
      }

    default:
      return state;
  }
}


const appReducers = combineReducers({
  tournamentAction: TournamentReducer,
  userAction: authorizationReducer,
  loading: pagesReducer,
});

export default appReducers;
