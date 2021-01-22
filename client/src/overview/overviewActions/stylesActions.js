import axios from 'axios';
import token from '../../../config/config.js';
import changeStyle from './currentStyleActions.js';

var getStyles = (productId) => (dispatch) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${productId}/styles`,
      {
        headers: {
          Authorization: token
        }
      }
    )
    .then((res) => {
      console.log('results from call', res.data.results);
      dispatch({
        type: 'CHANGE_STYLES',
        payload: res.data
      });
      return res;
    })
    .then((res2) => {
      dispatch(changeStyle(res2.data.results[0]));
    })
    .catch((error) => {
      dispatch({
        type: null,
        payload: null
      });
    });
};
export default getStyles;
