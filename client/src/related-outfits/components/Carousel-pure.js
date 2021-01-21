import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import '../styles.css';
// import { Container, Card, Col, Row } from 'react-bootstrap';
import { products } from '../../dummyData.js';

const Carousel = () => {
  let numSlides = products.length;
  return (
    // <CarouselProvider
    //   naturalSlideWidth={100}
    //   naturalSlideHeight={8}
    //   totalSlides={numSlides}
    // >
    //   <Slider>
    //     {products.map(product => {
    //       return <Slide key={product.id}>
    //         <div>{product.name}</div>
    //         <div>{product.description}</div>
    //         <div>{product.default_price}</div>
    //       </Slide>
    //     })}
    //   </Slider>
    //   <ButtonBack className="btn-related">Back</ButtonBack>
    //   <ButtonNext className="btn-related">Next</ButtonNext>
    // </CarouselProvider>

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={10}
      totalSlides={numSlides}
    >
    <Slider>
      {products.map(product => {
        return <Slide key={product.id}>{product.name}</Slide>
      })}
    </Slider>
    <ButtonBack className="btn-related">Back</ButtonBack>
    <ButtonNext className="btn-related">Next</ButtonNext>

    {/* <Slider>
      <Slide index={0}>I am the first Slide.</Slide>
      <Slide index={1}>I am the second Slide.</Slide>
      <Slide index={2}>I am the third Slide.</Slide>
    </Slider> */}
    </CarouselProvider>
  )
};

export default Carousel;