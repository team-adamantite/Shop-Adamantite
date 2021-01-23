import React, { useState, useLayoutEffect, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import RelatedCarousel from './RelatedCarousel.js';
import RelatedModal from './RelatedModal.js';
import { Container, Modal, Button } from 'react-bootstrap';
<<<<<<< HEAD
import { getRelatedProducts } from '../actions/relatedActions.js';
=======
import {
  getRelatedProducts,
  getProductDetails
} from '../actions/relatedActions.js';
>>>>>>> main
import store from '../../store.js';
// import '../styles/related.css';

<<<<<<< HEAD
const RelatedProducts = ({ product }) => {
  // console.log('top line product: ', product)
=======
const RelatedProducts = (props) => {
>>>>>>> main
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
<<<<<<< HEAD
  // const currentProduct = useSelector(state => state.currentProduct);
  // const currentThumbnail = useSelector(state => state.productStyles.results[0].photos[0].thumbnail_url);
  // const productIds = useSelector(state => state.relatedIds.ids);
  // let products = useSelector(state => state.related.productDetails || []  );
  const { id } = product;
=======
  const product = useSelector((state) => state.currentProduct);
  const products = useSelector((state) => state.relatedProducts.productIds);
  // const productId = useSelector(state => state.currentProduct.id);
  const { id, name, category, price } = product;
>>>>>>> main

  const [ productDetails, setProductDetails ] = useState(null);
  useEffect(() => {
<<<<<<< HEAD
    getRelatedProducts(id)
    .then(response => {
      console.log('we got here', response)
      setProductDetails(response)
    })
  }, [id]);


  // const tableProducts = [
  //   { id: 1, value1: '', category: 'Features', value2: ''},
  //   { id: 2, value1: '✓', category: 'Does the Job', value2: 'Meh'},
  //   { id: 3, value1: '✓', category: 'Impresses Strangers', value2: '✓'},
  //   { id: 4, value1: 'They\'re never impressed.', category: 'Impresses Friends', value2: 'See left'},
  //   { id: 5, value1: 'Taco Bell', category: 'Date Material', value2: '✓✓✓'},
  //   { id: 6, value1: 'Do you know the deceased?', category: 'Can Be Worn at a Funeral', value2: 'Do you care about the deceased?'}
  // ];

  // const columns = [
  //   {
  //     dataField: 'id',
  //     value1: '',
  //     hidden: true
  //   },
  //   {
  //     dataField: 'value1',
  //     text: 'So Fatigues'
  //   },
  //   {
  //     dataField: 'category',
  //     text: '',
  //     style: { backgroundColor: 'lightgray'}
  //   },
  //   {
  //     dataField: 'value2',
  //     text: 'Camo Onesie'
=======
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
>>>>>>> main
  //   }
  // ];

  // let comparisonProducts = {
  //   currentProduct:
  //     {
  //       details: currentProduct
  //       // thumbnail: currentThumbnail
  //     },
  //   compareProduct:
  //     {
  //       details: {},
  //       thumbnail: ''
  //     }
  // };

  // const handleOpen = (productDetails, compareThumbnail) => {
  //   comparisonProducts.compareProduct.details = productDetails;
  //   // comparisonProducts.compareProduct.thumbnail = compareThumbnail;
  //   setShow(true);
  // }
  // const handleClose = () => setShow(false);

<<<<<<< HEAD

    // if (productDetails !== null) {
    //   console.log('true: ', productDetails[0])
    //   return <div>{productDetails[0].name}</div>
    // } else {
    //   console.log('false: ',productDetails)
    //   return <div>def</div>
    // }


  return (
    <>
    {productDetails ? <RelatedCarousel products={productDetails} /> : <div>def</div>}



    {/* <Modal
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
    <BootstrapTable keyField="id" data={tableProducts} columns={columns} headerClasses="modalHeader" rowClasses="modalRows" />

    </Modal.Body>
      <Modal.Footer>
     <Button variant="primary" onClick={handleClose}>Close</Button>
   </Modal.Footer>
   </Modal> */}
   </>
  )
}
=======
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
>>>>>>> main

var mapStateToProps = (state) => ({
  product: state.currentProduct
});

var mapDispatchToProps = (dispatch) => {
  return {
    getRelatedProducts: (id) => dispatch(getRelatedProducts(id)),
  };
};

let RelatedProductsContainer = connect(
  mapStateToProps,
  null
)(RelatedProducts);

export default RelatedProductsContainer;

<<<<<<< HEAD
// export default RelatedProducts;
=======
// react fragments
// Thanks Daniel
>>>>>>> main
