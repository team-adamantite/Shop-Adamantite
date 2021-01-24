import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const RelatedSlide = ({ product, handleOpen }) => {
  let thumbnailStyle = {
    backgroundImage: `url(${product.thumbnail})`,
    width: '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%'
  };

  // let modalComparisonData = [product]

  return (
    <>
      <div onClick={() => handleOpen(product)}>
        <div className='modalStar'>&#9733;</div>
        <div style={thumbnailStyle}></div>
        <div className='productCategory'>{product.category}</div>
        <div className='productName'>{product.name}</div>
        <div className='productDesc'>{product.description}</div>
        <div className='productPrice'>${product.default_price}</div>
      </div>
    </>
  );
};

export default RelatedSlide;
