import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RelatedCarousel from './RelatedCarousel.js';
import { Container, Modal } from 'react-bootstrap';
import { getRelatedProducts, getProductDetails } from '../actions/relatedActions.js';
import store from '../../store.js';

const RelatedProducts = (props) => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const product = useSelector(state => state.currentProduct);
  const { id, name, category, price } = product;

  // useLayoutEffect(() => {
  //   dispatch(getRelatedProducts(id, dispatch))
  // }, [dispatch, id]);

  // useLayoutEffect(() => {
  //   dispatch(getProductDetails(products))
  // }, [dispatch, products])

  useLayoutEffect(() => {
    console.log(store);
  })

  // useEffect(() => {
  //   products.map(product => {
  //     dispatch(getProductDetails(product))
  //   });
  // }, [id]);

  /* HOW TO MAKE THESE SYNCRONOUS?
  useEffect(() => {
    dispatch(getProductDetails(product.id))
  }, []);
  */

  // const relatedProducts = useSelect(state => state.getRelatedProducts);

  // const productDetails = useSelect(state => state.getProductDetails);

  return (
    <Container id="relatedContainer">
      <div><RelatedCarousel /></div>
    </Container>
  );
}

export default RelatedProducts;

// react fragments
// Thanks Daniel