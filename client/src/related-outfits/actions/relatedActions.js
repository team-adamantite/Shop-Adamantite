import axios from 'axios';
import token from '../../../config/config.js';
export const GET_RELATED_SUCCESS = 'GET_RELATED_SUCCESS';
export const GET_RELATED_FAILURE = 'GET_RELATED_FAILURE';
export const GET_THUMBNAILS_FAILURE = 'GET_THUMBNAILS_FAILURE';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_FAILURE = 'GET_PRODUCT_DETAILS_FAILURE';

// const dispatch = useDispatch();
const URL = '/proxy/api/fec2/hratx';

export function getRelatedProducts(id, dispatch) {
  let productDetails = [];
  // return function(dispatch) {
  return axios
    .get(`${URL}/products/${id}/related`, {
      headers: {
        Authorization: token
      }
    })
    .then((products) => {
      var productRequestsPromises = products.data.map((productId) => {
        return axios
          .get(`${URL}/products/${productId}`, {
            headers: {
              Authorization: token
            }
          })
          .then((productResponse) => {
            return axios
              .get(`${URL}/products/${productId}/styles`)
              .then((stylesResponse) => {
                // console.log('product response: ', productResponse.data);
                let productObj = {};
                productObj = productResponse.data;
                productObj.thumbnail =
                  stylesResponse.data.results[0].photos[0].thumbnail_url;
                // console.log('temp product obj', productObj)
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
      console.log('action array: ', arrayOfProductResponses);
      return arrayOfProductResponses;
    });
  // .then(() => {
  //   console.log('productDetails: ', productDetails);
  //   return {
  //     type: 'GET_RELATED_SUCCESS',
  //     payload: productDetails
  //   }
  // })
  // .catch(err => {
  //   return {
  //     type: 'GET_RELATED_FAILURE',
  //     payload: err
  //   }
  // });
  // }
}

// const getProductIds = (id, dispatch) => {
//   return function(dispatch) {
//   axios
//   .get(`${URL}/products/${id}/related`, {
//     headers: {
//       Authorization: token
//     }
//   })
//   .then(response => {
//     console.log(response.data);
//     getProductDetails(response.data, dispatch);
//     dispatch({
//       type: 'GET_IDS_SUCCESS',
//       payload: response.data
//     })
//   })
//   .catch(err => {
//     dispatch({
//       type: 'GET_IDS_FAILURE',
//       payload: err
//     });
//   })
//   }
// }

// const getProductDetails = (ids, dispatch) => {
//   let productDetails = [];
//     ids.map(id => {
//     let productStorage = {};
//     return axios
//     .get(`${URL}/products/${id}`, {
//       headers: {
//         Authorization: token
//       }
//     })
//     .then(response => {
//       productStorage = response.data;
//     })
//     .then(() => {
//       return axios
//       .get(`${URL}/products/${id}/styles`, {
//         headers: {
//           Authorization: token
//         }
//       })
//       .then(styles => {
//         // console.log(styles.data.results[0].photos[0].thumbnail_url)
//         productStorage.thumbnail = styles.data.results[0].photos[0].thumbnail_url
//       })
//       .then(() => {
//         console.log(productStorage)
//         productDetails.push(productStorage);
//         console.log('Whats in the array ', productDetails);
//       })
//       .catch(err => {
//         console.error('Could not retrieve thumbnails: ', err);
//       })
//     })
//   })
//   .then(() => {
//     dispatch({
//       type: 'GET_PRODUCT_DETAILS_SUCCESS',
//       payload: productDetails
//     });
//   })
//   .catch(err => {
//     dispatch({
//       type: 'GET_PRODUCT_DETAILS_FAILURE',
//       payload: err
//     })
//   })
// }

// export {
//   getProductIds,
//   getProductDetails
// }

// export {
//   getProductIds,
//   getProductDetails
// }
