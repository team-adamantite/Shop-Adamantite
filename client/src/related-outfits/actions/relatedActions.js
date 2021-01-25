import axios from 'axios';
export const GET_RELATED_SUCCESS = 'GET_RELATED_SUCCESS';
export const GET_RELATED_FAILURE = 'GET_RELATED_FAILURE';
export const GET_THUMBNAILS_FAILURE = 'GET_THUMBNAILS_FAILURE';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';

const URL = '/proxy/api/fec2/hratx';

export function getRelatedProducts(id, dispatch) {
  let productDetails = [];
  return axios
    .get(`${URL}/products/${id}/related`)
    .then((products) => {
      var productRequestsPromises = products.data.map((productId) => {
        return axios
          .get(`${URL}/products/${productId}`)
          .then((productResponse) => {
            return axios
              .get(`${URL}/products/${productId}/styles`)
              .then((stylesResponse) => {
                let productObj = {};
                productObj = productResponse.data;
                productObj.thumbnail =
                  stylesResponse.data.results[0].photos[0].thumbnail_url;
                return productObj;
              })
              .catch((err) => {
                console.error('Could not retrieve thumbnail: ', err);
              });
          });
      });
      return Promise.all(productRequestsPromises);
    })
    .then((arrayOfProductResponses) => {
      return arrayOfProductResponses;
    });
}
