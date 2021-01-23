import React from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/related.css';
// { name, description, category, default_price, thumbnail }
// { name, category, default_price, thumbnail }

const RelatedSlide = ({product, handleOpen, handleClose }) => {

  let thumbnailStyle = {
    backgroundImage: `url(${product.thumbnail})`,
    width: '150px',
    height: '150px',
    // align: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%'
  };

  // let modalComparisonData = [product]

  return (
    <>
<<<<<<< HEAD
      {/* <div onClick={() => handleOpen(product, thumbnail)}> */}
        <div className="modalStar">&#9733;</div>
        <div style={thumbnailStyle}></div>
        <div className="productCategory">{product.category}</div>
        <div className="productName">{product.name}</div>
        <div className="productDesc">{product.description}</div>
        <div className="productPrice">${product.default_price}</div>
      {/* </div> */}
=======
      <div className='modalStar'>&#9733;</div>
      <div style={thumbnailStyle}></div>
      <div className='productCategory'>{product.category}</div>
      <div className='productName'>{product.name}</div>
      <div className='productDesc'>{product.description}</div>
      <div className='productPrice'>{product.default_price}</div>
>>>>>>> main
    </>
  );
};

export default RelatedSlide;
