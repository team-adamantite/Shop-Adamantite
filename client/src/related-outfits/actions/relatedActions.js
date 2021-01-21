import axios from 'axios';
import token from '../../../config/config.js';
// const token = "cbef60b42a3e41174f9bb65c0325c91cbace367c";
// axios.defaults.headers.common['Authorization'] = token;
export const GET_RELATED_SUCCESS = 'GET_RELATED_SUCCESS';
export const GET_RELATED_FAILURE = 'GET_RELATED_FAILURE';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx';

export function getRelatedProducts(id) {
  let productDetails = [];
  return function(dispatch) {
    axios
      .get(`${URL}/products/${id}/related`, {
        headers: {
          Authorization: token
        }
      })
      .then(products => {
        products.data.map(productId => {
          let productObj = {};
          return axios
            .get(`${URL}/products/${productId}`, {
              headers: {
                Authorization: token
              }
            })
            .then(response => {
              productObj = response.data;
            })
            .then(() => {
              return axios
                .get(`${URL}/products/${productId}/styles`)
                .then(response => {
                  productObj.thumbnail = response.data.results[0].photos[0].thumbnail_url;
                })
                .then(() => {
                  productDetails.push(productObj)
                })
                .catch(err => {
                  console.error('Could not retrieve thumbnail: ', err)
                })
            })
        })
      })
      .then(() => {
        dispatch({
          type: 'GET_RELATED_SUCCESS',
          payload: productDetails
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_RELATED_FAILURE',
          // payload: err.response.statusText
        })
      });
  }
}