import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RelatedSlide from './RelatedSlide.js';
import { products, styles } from '../../dummyData.js';

const RelatedCarousel = () => {
  let thumbnail = styles.results[0].photos[0].thumbnail_url;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2560, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
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
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      // renderDotsOutside={renderButtonGroupOutside}
      // focusOnSelect={true}
      partialVisibility={true}
    >
        {products.map(product => {
          return <RelatedSlide key={product.id} product={product} thumbnail={thumbnail} />
        })}
        {/* <RelatedSlide /> */}
    </Carousel>
  )
}

export default RelatedCarousel;