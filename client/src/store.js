import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import productReviewReducer from './reviews/reviewReducers/reviewsReducer';
import { product } from './dummyData.js';

//action
var changeCurrentProduct = (product) => ({
  type: 'CHANGE_PRODUCT',
  payload: product
});
//reducer
var currentProductReducer = (state = { currentProduct: {} }, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.payload || {};
    default:
      return state;
  }
};

var productStylesReducer = (state = { productStyles: [] }, action) => {
  switch (action.type) {
    case 'CHANGE_STYLES':
      return action.payload || [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentProduct: currentProductReducer,
  // productStyles: productStylesReducer,
  reviews: productReviewReducer
});

const store = createStore(
  rootReducer,
  { currentProduct: product },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
