import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReviewReducer } from './ratings&reviews/reducers/productReviewReducers.js';

import {
  product,
  products,
  styles,
  related,
  reviews,
  reviewMeta,
  qa_questions,
  qa_answers,
  cart
} from './dummyData.js';

const reducer = combineReducers({
  productReview: productReviewReducer
});

const initialState = {
  product,
  products,
  styles,
  related,
  reviews,
  reviewMeta,
  questions: qa_questions,
  answers: qa_answers,
  cart
};

const middleware = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
