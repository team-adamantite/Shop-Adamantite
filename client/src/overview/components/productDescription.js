import React from 'react';
import {connect} from 'react-redux';

var productDescription = ({currentProduct}) => {
  return (
    <div id = 'productInfo'>
      <div id = 'description'>{currentProduct.description}</div>
    </div>
  )
}

var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct}
);

var productDescriptionContainer = connect(mapStateToProps, null)(productDescription);

export default productDescriptionContainer;