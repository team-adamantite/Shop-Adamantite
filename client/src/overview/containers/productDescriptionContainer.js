import {connect} from 'react-redux';
import productDescription from '../components/productDescription';

var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct}
);

var productDescriptionContainer = connect(mapStateToProps, null)(productDescription);

export default productDescriptionContainer;