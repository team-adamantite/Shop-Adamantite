import React from 'react';
import ProductInfoContainer from './productInfo';
import ProductStylesContainer from './productStyles';
import ProductDescriptionContainer from './productDescription';
import GalleryContainer from './gallery';

function overviewMain () {
  return(


  <div>
    <GalleryContainer/>
    <br/>
    <ProductDescriptionContainer/>
    <br/>
    <ProductInfoContainer/>
    <br/>
    <ProductStylesContainer/>
  </div>


)
}

export default overviewMain;