import {connect} from 'react-redux';
import productStyles from '../components/productStyles';

var mapStateToProps = (state) => (
  {styles: state.productStyles}
);

var productStylesContainer = connect(mapStateToProps, null)(productStyles);

export default productStylesContainer;