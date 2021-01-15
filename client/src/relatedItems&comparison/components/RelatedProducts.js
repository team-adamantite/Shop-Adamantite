import React from 'react';
import '../styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { products } from '../../dummyData.js';

const RelatedProducts = () => {
  return (
    <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={5}
          totalSlides={5}
          infinite={true}
        >
          <Slider>
            {products.forEach(product => {
              return <Slide key={product.id}>
                <div>{product.name}</div>
              </Slide>
            })}
          </Slider>
          <ButtonBack className="relatedButton">Back</ButtonBack>
          <ButtonNext className="relatedButton">Next</ButtonNext>
        </CarouselProvider>
    </div>
  );
}


export default RelatedProducts;

// react fragments
// Thanks Daniel