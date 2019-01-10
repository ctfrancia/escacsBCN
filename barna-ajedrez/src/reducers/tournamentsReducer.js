const defaultState = {
  tournaments: []
};

const tournamentsReducer = (state = defaultState.tournaments, action) => {
  switch (action.type) {
    case 'ADD_NEW_TOURNAMENT':
      return [...state, action.tournaments];

    case 'FETCH_TOURNAMENT_LIST':
      return [...state, ...action.tournaments];

    case 'UPDATE_TOURNAMENT_LIST':
      return [...state, action.tournaments];

    default:
      return state;
  }
};
export default tournamentsReducer;
