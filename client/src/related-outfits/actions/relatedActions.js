import axios from 'axios';
import token from '../../../config/config.js';
// const token = "cbef60b42a3e41174f9bb65c0325c91cbace367c";
axios.defaults.headers.common['Authorization'] = token;
export const GET_RELATED_SUCCESS = 'GET_RELATED_SUCCESS';
export const GET_RELATED_FAILURE = 'GET_RELATED_FAILURE';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx';

// const getRelatedProducts = (id = 12012, dispatch) => {
//   axios
//     .get(`${URL}/products/${id}/related`, {
//       headers: {
//         Authorization: token
//       }
//     })
//     .then(res => {
//       dispatch({
//         type: 'GET_RELATED_SUCCESS',
//         payload: res.data
//       })
//     })
//     .catch(err => {
//       dispatch({
//         type: 'GET_RELATED_FAILURE',
//         payload: err.response.statusText
//       })
//     });
// };

export function getRelatedProducts (id = 12012) {
  return function(dispatch) {
    return axios
      .get(`${URL}/products/${id}/related`)
      .then(res => {
        dispatch({
          type: 'GET_RELATED_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_RELATED_FAILURE',
          payload: err.response.statusText
        })
      });
  }
};

const getProductDetails = product => {
  axios
    .get(`${URL}/products/${product}`, {
      headers: {
        Authorization: token
      }
    })
    .then(res =>
      dispatch({
        type: 'GET_PRODUCT_DETAILS_SUCCESS',
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: 'GET_DETAILS_FAILURE',
        payload: err.response.statusText
      })
    );
};

const getProductReviews = id => {
  axios
    .get(`${URL}/products/reviews?product_id=${id}`)
}

export {
  getProductDetails
};