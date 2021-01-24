import React from 'react';
import { Card } from 'react-bootstrap';
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
<<<<<<< HEAD
      <div className="slideCard" onClick={() => handleOpen(product)}>
        <div className="modalStar">&#9733;</div>
        <div style={thumbnailStyle}></div>
        <div className="productName">{product.name}</div>
        <div className="productCategory">{product.category}</div>
        <div className="productDesc">{product.description}</div>
        <div className="productPrice">${product.default_price}</div>
=======
      <div onClick={() => handleOpen(product)}>
        <div className='modalStar'>&#9733;</div>
        <div style={thumbnailStyle}></div>
        <div className='productCategory'>{product.category}</div>
        <div className='productName'>{product.name}</div>
        <div className='productDesc'>{product.description}</div>
        <div className='productPrice'>${product.default_price}</div>
>>>>>>> main
      </div>

      {/* <Card className="slideCard">
        <Card.Body>
          <Card.Image variant="top" src={(product.thumbnail)}></Card.Image>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>{product.category}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.default_price}</Card.Text>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default RelatedSlide;
