import React from 'react';

var productInfo = ({ currentProduct }) => {
  return (
    <div id='productInfo'>
      <br />
      <br />
      <label>
        Category:
        <div id='productCategory'>{currentProduct.category}</div>
      </label>
      <br />
      <label>
        Name:
        <div id='productName'>{currentProduct.name}</div>
      </label>
      <br />
      <label>
        Price:
        <div id='productName'>{currentProduct.default_price}</div>
      </label>
    </div>
  );
};

export default productInfo;
