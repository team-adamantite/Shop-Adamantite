const productReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PRODUCT_REVIEWS':
      return {
        ...state,
        list: action.payload
      };
    case 'GET_PRODUCT_REVIEWS_META':
      return {
        ...state,
        meta: action.payload
      };
    case 'CREATE_PRODUCT_REVIEW':
      return {
        ...state,
        message: action.payload
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
