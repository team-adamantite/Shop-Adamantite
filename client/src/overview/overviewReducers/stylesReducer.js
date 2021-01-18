
var productStylesReducer = (state = { productStyles: [] }, action) => {
  switch (action.type) {
    case 'CHANGE_STYLES':
      return action.payload || [];
    default:
      return state;
  }
};

export default productStylesReducer;