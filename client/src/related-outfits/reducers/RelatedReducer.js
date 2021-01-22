import GET_RELATED_SUCCESS from '../actions/relatedActions.js'
import GET_RELATED_FAILURE from '../actions/relatedActions.js'
// import GET_PRODUCT_DETAILS_SUCCESS from '../actions/relatedActions.js'
// import GET_PRODUCT_DETAILS_FAILURE from '../actions/relatedActions.js'

const relatedProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_RELATED_SUCCESS':
      return {
        ...state,
        productDetails: action.payload
      };
    case 'GET_RELATED_FAILURE':
      console.error('Could get not retrieve related products: ', action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

// const relatedDetailsReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'GET_PRODUCT_DETAILS_SUCCESS ':
//       return {
//         ...state,
//         productDetails: action.payload
//       };
//     case 'GET_PRODUCT_DETAILS_FAILURE':
//       return {
//         ...state,
//         error: action.payload
//       }
//     default:
//       return state;
//   }
// }

export {
  relatedProductsReducer
  // relatedDetailsReducer
}