import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import {connect} from 'react-redux';

var productInfo = ({currentProduct, currentStyle}) => {
  return (
    <div id = 'productInfo'>
          <span>
          <Rating
            name='customized-empty'
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
          </span>
        <a href = 'http://localhost:3000/'>Read all Reviews</a>
      <br/>
      <br/>
      <label>Category:
        <div id = 'productCategory'>{currentProduct.category}</div>
      </label>
      <br/>
      <label>Name:
        <div id = 'productName'>{currentProduct.name}</div>
      </label>
      <br/>
      <label>Price:
        <div id = 'productName'>{currentStyle.original_price}</div>
      </label>


    </div>
  )
}

var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct,
  currentStyle: state.currentStyle}
);

var productInfoContainer = connect(mapStateToProps, null)(productInfo);

export default productInfoContainer;