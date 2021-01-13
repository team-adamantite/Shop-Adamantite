const TEMP_CONSTANT = 'TEMP_CONSTANT';

export const productReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case TEMP_CONSTANT:
      return { ...state };
    default:
      return state;
  }
};
