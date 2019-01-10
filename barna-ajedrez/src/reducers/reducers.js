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

const TournamentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return {
        tournaments: [...state.tournaments, action.tournament]
      };

    case 'FETCH_TOURNAMENT_LIST':
      return {
        tournaments: [...state.tournaments, ...action.tournament]
      };

    case 'UPDATE_TOURNAMENT_LIST':
      return {
        tournaments: [...state.tournaments, action.tournaments]
      };

    default:
      return state;
  }
};

const authorizationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return{
        ...state,
        authorization: {
          user: `${action.username}`,
          auth_token: `${action.auth_token}`
        }
      }
    case 'SIGN_OUT':
      return{
        ...state,
        authorization: {
          user: '',
          auth_token: ''
        }
      };

    default:
      return state;
  }
};

const pagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        pages: {
          loading: true
        }
      };

    case 'DONE_LOADING':
      return {
        ...state,
        pages: {
          loading: false
        }
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
