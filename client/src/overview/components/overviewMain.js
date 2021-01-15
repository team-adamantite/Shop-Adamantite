import React from 'react';
import ProductInfo from './productInfo.js';
import ProductInfoContainer from '../containers/productInfoContainer';
import ProductStylesContainer from '../containers/productStylesContainer';
import ProductDescriptionContainer from '../containers/productDescriptionContainer';
import GalleryContainer from '../containers/galleryContainer';

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