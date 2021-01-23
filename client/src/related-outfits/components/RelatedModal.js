import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
// import { Table, Button } from "react-bootstrap";
// import { products, product, styles } from '../../dummyData.js';

const tableProducts = [
  { value1: '✓', category: 'Does the Job', value2: 'Meh'},
  { value1: '', category: 'Impresses Strangers', value2: '✓'},
  { value1: 'They\'re never impressed.', category: 'Impresses Friends', value2: 'See left'},
  { value1: 'Do you know the deceased?', category: 'Can Be Worn at a Funeral', value2: 'Do you care about the deceased?'},
  { value1: 'Taco Bell', category: 'Date Material', value2: 'What date?'}
]

const RelatedModal = ({ comparisonProducts }) => {

//   let currentProduct = comparisonProducts.currentProduct;
//   let compProduct = comparisonProducts.compareProduct;

//   function featuresCheck(product) {
//     let counter = 2;
//     let features = {}

//     for (let i = 0; i < features.length; i++) {
//       features.id: counter;
//       features.value: '✓';
//       features.category: features.
//     }
//   }

  // let data = {
  //   {prod1: compare}
  // }

  let product = products[0];
  const columns = [
    {
      dataField: 'left',
      text: ''
    },
    {
      dataField: 'features',
      text: 'Features'
    },
    {
      dataField: 'right',
      text: ''
    }
  ]
  return (
    <div style={{ padding: "20px", textAlign: "center"}}>
      <h1>Compare Product</h1>
      <BootstrapTable keyField="id" data={products} columns={columns} />
    </div>
  )
}

export default RelatedModal;
