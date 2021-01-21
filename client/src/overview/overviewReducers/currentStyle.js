
var currentStyleReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_STYLE':
      return action.payload || null;
    default:
      return state;
  }
};

export default currentStyleReducer;