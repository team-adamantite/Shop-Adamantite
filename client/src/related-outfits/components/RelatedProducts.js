import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import RelatedCarousel from './RelatedCarousel.js';
import RelatedModal from './RelatedModal.js';
import { Container, Modal, Button } from 'react-bootstrap';
import {
  getRelatedProducts,
  getProductDetails
} from '../actions/relatedActions.js';
import store from '../../store.js';
// import '../styles/related.css';

const RelatedProducts = (props) => {
  const dispatch = useDispatch();
  const [productIds, setProducts] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [show, setShow] = useState(false);
  const product = useSelector((state) => state.currentProduct);
  const products = useSelector((state) => state.relatedProducts.productIds);
  // const productId = useSelector(state => state.currentProduct.id);
  const { id, name, category, price } = product;

  useEffect(() => {
    console.log('What even is this? ', products);
  });

  useLayoutEffect(() => {
    dispatch(getRelatedProducts(id));
  }, [dispatch, getRelatedProducts, id]);

  // MAPPING FUNCTIONALITY
  // .then(products => {
  //   products.map(product => {
  //     dispatch(getProductDetails(product))
  //   })
  // })

  // useLayoutEffect(() => {
  //   if (products) {
  //     products.map(product => {
  //       dispatch(getProductDetails(product, dispatch))
  //     })
  //   }
  // }, [dispatch, products]);

  // function getRelatedDetails() {
  //   products.map(product => {
  //     dispatch(getProductDetails(product, dispatch))
  //   })
  // }

  const tableProducts = [
    { id: 1, value1: '✓', category: 'Does the Job', value2: 'Meh' },
    { id: 2, value1: '✓', category: 'Impresses Strangers', value2: '✓' },
    {
      id: 3,
      value1: "They're never impressed.",
      category: 'Impresses Friends',
      value2: 'See left'
    },
    { id: 5, value1: 'Taco Bell', category: 'Date Material', value2: '✓✓✓' },
    {
      id: 4,
      value1: 'Do you know the deceased?',
      category: 'Can Be Worn at a Funeral',
      value2: 'Do you care about the deceased?'
    }
  ];

  const columns = [
    {
      dataField: 'id',
      value1: '',
      hidden: true
    },
    {
      dataField: 'value1',
      text: 'So Fatigues'
    },
    {
      dataField: 'category',
      text: 'Features'
    },
    {
      dataField: 'value2',
      text: 'Camo Onesie'
    }
  ];

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <RelatedCarousel />

      <Button variant='primary' onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>COMPARE PRODUCTS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <BootstrapTable
              keyField='id'
              data={tableProducts}
              columns={columns}
              headerClasses='modalHeader'
              rowClasses='modalRows'
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RelatedProducts;

// react fragments
// Thanks Daniel
