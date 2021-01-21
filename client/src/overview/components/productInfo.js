import React from 'react';
import {connect} from 'react-redux';

var productInfo = ({currentProduct, currentStyle}) => {
  return (
    <div id = 'productInfo'>
          <span>
          Rating goes here
          </span>
        <a href = 'http://localhost:3000/'>Read all Reviews</a>
      <br/>
      <br/>
      <label>Category:
        <div id = 'productCategory'>{currentProduct.category}</div>
      </label>
      <br />
      <label>Price:
        <div id = 'productName'>{currentStyle.original_price}</div>
      </label>
    </div>
  );
};

var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct,
  currentStyle: state.currentStyle}
);

var productInfoContainer = connect(mapStateToProps, null)(productInfo);

export default productInfoContainer;
