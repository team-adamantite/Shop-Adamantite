import React from 'react';

var productDescription = ({currentProduct}) => {
  return (
    <div id = 'productInfo'>
      <div id = 'description'>{currentProduct.description}</div>
    </div>
  )
}

export default productDescription;