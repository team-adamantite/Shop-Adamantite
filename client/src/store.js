import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReviewReducer from './reviews/reviewReducers/reviewsReducer';
import { product, styles } from './dummyData.js';
import relatedProductsReducer from './related-outfits/reducers/relatedReducer.js'

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
  reviews: productReviewReducer,
  relatedProducts: relatedProductsReducer
});

const store = createStore(
  rootReducer,
  { currentProduct: product,
    productStyles: styles},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
