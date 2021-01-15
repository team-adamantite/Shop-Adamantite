import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';

var productInfo = ({currentProduct}) => {
  return (
    <div id = 'productInfo'>
      <label>Ratings
          <div>
          <Rating
            name='customized-empty'
            defaultValue={2}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize='inherit' />}
            />
          </div>
        Read All Reviews
      </label>
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
        <div id = 'productName'>{currentProduct.default_price}</div>
      </label>


    </div>
  )
}

export default productInfo;