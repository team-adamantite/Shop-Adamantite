import React from 'react';
import ProductInfoContainer from './productInfo';
import ProductStylesContainer from './productStyles';
import ProductDescriptionContainer from './productDescription';
import GalleryContainer from './gallery';

function overviewMain () {
  return(


  <div className = 'wrapper'>
    <GalleryContainer/>
    <div>
      <ProductInfoContainer/>
      <ProductStylesContainer/>
    <ProductDescriptionContainer/>
    </div>
  </div>


)
}

export default overviewMain;