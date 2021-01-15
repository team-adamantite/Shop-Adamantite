import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD
import { productReviewReducer } from './ratings&reviews/reducers/productReviewReducers.js';
import { product, styles } from './dummyData.js';
=======
import productReviewReducer from './reviews/reviewReducers/reviewsReducer';
import { product } from './dummyData.js';
>>>>>>> 28455ed630e10e1679d1f408a2e987b71b4859b2

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
  productStyles: productStylesReducer,
  reviews: productReviewReducer
});

const store = createStore(
  rootReducer,
  { currentProduct: product,
    productStyles: styles},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
