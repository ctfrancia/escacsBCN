import { combineReducers } from 'redux';

const defaultState = {
  tournaments: []
};

const tournamentReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      
      break;
  
    default:
      return state;
  }

}

const appReducers = combineReducers({
  tournamentReducer
});

export default appReducers;