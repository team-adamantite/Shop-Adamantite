import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { Container } from 'react-bootstrap';
import '../../../../node_modules/react-multi-carousel/lib/styles.css';
import RelatedSlide from './RelatedSlide.js';
// import { products, styles } from '../../dummyData.js';
import '../../store.js';

const RelatedCarousel = ({ products }) => {
  console.log(products);
  // let thumbnail = styles.results[0].photos[0].thumbnail_url;

  // let test = useSelector(state => state.relatedProducts.productDetails || []);
  // let [products, setProducts] = useState([]);

  // useEffect(() => {
  //   console.log('what are the products? ', products);
  //   console.log('what is the test? ', test);
  // })

  // useEffect(() => {
  //   setProducts(test);
  //   // setProducts([{name: 'Matthew'}, {name: "Chris"}])
  // }, [test, setProducts])

  // useEffect(() => {
  //   console.log('carousel products: ', products.length);
  // })

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2560, min: 1024 },
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
      <Container width='75%' align='center'>
        <div width='75%'>
          <h1>Related Products</h1>
          <Carousel
            id='relatedContainer'
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            renderButtonGroupOutside={true}
          >
            {/* <div onClick={console.log('AAAHAAHHHAHHA ')}>abc</div> */}
            {/* console.log(products); */}

            {/* {setTimeout(products.map(product => {
              return <div>{product.description}</div>
            }), 1000)} */}

            {products.map((product) => {
              // return <RelatedSlide key={product.id} product={product} />
              // console.log('What the hell is this? ', product);
              return (
                <RelatedSlide
                  key={product.id}
                  product={product}
                  thumbnail={thumbnail}
                />
              );
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default RelatedCarousel;
