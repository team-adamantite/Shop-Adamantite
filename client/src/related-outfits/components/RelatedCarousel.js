import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { Container } from 'react-bootstrap';
import '../../../../node_modules/react-multi-carousel/lib/styles.css';
import RelatedSlide from './RelatedSlide.js';
// import { products, styles } from '../../dummyData.js';
import '../../store.js';
// import '../styles/related.css';

const RelatedCarousel = ({ products, handleOpen }) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1800, min: 600 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <div onClick={() => {console.log(products.length)}}>abc</div>
    <Container className="relatedContainer" width="75%" align="center">
    <div width="75%">
      <h1>RELATED PRODUCTS</h1>
        <Carousel id="relatedContainer"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          renderButtonGroupOutside={true}
          keyboard={true}
        >
            {products.map(product => {
<<<<<<< HEAD
              return <RelatedSlide key={product.id} product={product} handleOpen={handleOpen} />
=======
              // return <RelatedSlide key={product.id} product={product} />
              // console.log('What the hell is this? ', product);
              // return <div handleOpen={handleOpen} key={product.id}><RelatedSlide product={product} thumbnail={thumbnail} /></div>
              return <RelatedSlide key={product.id} product={product} />
>>>>>>> main
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default RelatedCarousel;
