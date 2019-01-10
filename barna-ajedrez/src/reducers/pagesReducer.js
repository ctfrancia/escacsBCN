const defaultState = {
  pages: {
    loading: true
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
      };

    default:
      return state;
  }
};

export default pagesReducer;