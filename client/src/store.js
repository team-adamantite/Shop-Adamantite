import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReviewReducer from './reviews/reviewReducers/reviewsReducer';
import { product, styles } from './dummyData.js';
import productStylesReducer from './overview/overviewReducers/stylesReducer.js';
import currentStyleReducer from './overview/overviewReducers/currentStyle.js';



//action
var changeCurrentProduct = (product) => ({
  type: 'CHANGE_PRODUCT',
  payload: product,
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

const rootReducer = combineReducers({
  currentProduct: currentProductReducer,
  productStyles: productStylesReducer,
  currentStyle: currentStyleReducer,
  reviews: productReviewReducer
})

const store = createStore(
  rootReducer,
  { currentProduct: product,
    productStyles: {results: []},
    currentStyle: {}
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
