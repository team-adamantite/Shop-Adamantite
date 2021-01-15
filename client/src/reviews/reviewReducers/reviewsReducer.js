const productReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_REVIEWS':
      return {
        ...state,
        reviews: action.payload
      };
    case 'PRODUCT_REVIEWS_ERROR':
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReviewReducer;
