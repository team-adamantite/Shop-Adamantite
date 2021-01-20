import React from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedSlide = ({ product, thumbnail }) => {
  return (
    <>
      <div>{product.name}</div>
      <div>{product.category}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <img src={thumbnail}></img>
    </>
  )
}

export default RelatedSlide;