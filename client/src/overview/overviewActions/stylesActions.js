import axios from 'axios';
import changeStyle from './currentStyleActions.js';

var getStyles = (productId) => (dispatch) => {
  axios
    .get(`/proxy/api/fec2/hratx/products/${productId}/styles`)
    .then((res) => {
      dispatch({
        type: 'CHANGE_STYLES',
        payload: res.data,
      });
      return res;
    })
    .then((res2) => {
      dispatch(changeStyle(res2.data.results[0]));
    })
    .catch((error) => {
      dispatch({
        type: null,
        payload: null,
      });
    });
};
export default getStyles;
