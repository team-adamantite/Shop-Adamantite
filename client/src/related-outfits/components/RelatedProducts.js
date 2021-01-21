import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import RelatedCarousel from './RelatedCarousel.js';
import RelatedModal from './RelatedModal.js';
import { Container, Modal, Button } from 'react-bootstrap';
import { getRelatedProducts, getProductDetails } from '../actions/relatedActions.js';
import store from '../../store.js';
import '../styles/related.css';

const RelatedProducts = (props) => {

  const dispatch = useDispatch();
  const [productIds, setProducts] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [show, setShow] = useState(false);
  const currentProduct = useSelector(state => state.currentProduct);
  // const currentThumbnail = useSelector(state => state.productStyles.results[0].photos[0].thumbnail_url);
  const products = useSelector(state => state.relatedProducts.productDetails);
  const { id, name, category, price } = currentProduct;

  // useEffect(() => {
  //   console.log('this is product ', product);
  // })

  useLayoutEffect(() => {
      dispatch(getRelatedProducts(id))
  }, [dispatch, getRelatedProducts, id]);

  const tableProducts = [
    { id: 1, value1: '', category: 'Features', value2: ''},
    { id: 2, value1: '✓', category: 'Does the Job', value2: 'Meh'},
    { id: 3, value1: '✓', category: 'Impresses Strangers', value2: '✓'},
    { id: 4, value1: 'They\'re never impressed.', category: 'Impresses Friends', value2: 'See left'},
    { id: 5, value1: 'Taco Bell', category: 'Date Material', value2: '✓✓✓'},
    { id: 6, value1: 'Do you know the deceased?', category: 'Can Be Worn at a Funeral', value2: 'Do you care about the deceased?'}
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
      text: '',
      style: { backgroundColor: 'lightgray'}
    },
    {
      dataField: 'value2',
      text: 'Camo Onesie'
    }
  ];

  let comparisonProducts = {
    currentProduct:
      {
        details: currentProduct
        // thumbnail: currentThumbnail
      },
    compareProduct:
      {
        details: {},
        thumbnail: ''
      }
  };

  const handleOpen = (productDetails, compareThumbnail) => {
    comparisonProducts.compareProduct.details = productDetails;
    // comparisonProducts.compareProduct.thumbnail = compareThumbnail;
    setShow(true);
  }
  const handleClose = () => setShow(false);

  return (
    <>

    <RelatedCarousel handleOpen={handleOpen} handleClose={handleClose} />

    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>COMPARE PRODUCTS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ padding: "20px", textAlign: "center"}}>
          <BootstrapTable keyField="id" data={comparisonProducts} columns={columns} headerClasses="modalHeader" rowClasses="modalRows" />
          {/* <BootstrapTable keyField="id" data={tableProducts} columns={columns} headerClasses="modalHeader" rowClasses="modalRows" /> */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>

    </>
  );
}

export default RelatedProducts;

// react fragments
// Thanks Daniel