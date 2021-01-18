import axios from 'axios';
import token from '../../config/config.js'

var getStyles = (productId) => (dispatch) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/${productId}/styles`, {
    headers: {
      Authorization: token
    }
  })
    .then ((res) => {
      dispatch({
        type: 'CHANGE_STYLES',
        payload: {currentVideos: res}
      })
    })
    .catch ((error) => {
      dispatch({
        type: 'CHANGE_STYLES',
        payload:
      })
    });

};

export default getStyles;