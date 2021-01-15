import {connect} from 'react-redux';
import productInfo from '../components/productInfo';

var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct}
);

var productInfoContainer = connect(mapStateToProps, null)(productInfo);

export default productInfoContainer;