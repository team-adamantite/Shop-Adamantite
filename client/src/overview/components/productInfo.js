import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import StarRating from '../../reviews/components/StarRating';

var productInfo = ({ currentProduct, currentStyle }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  return (
    <div id='productInfo'>
      <div className='fs-2 py-0' id='productName'>{currentProduct.name}</div>
      <div className= 'fs-0' id='productCategory'>{currentProduct.category}</div>
      <div id='overviewReviews'>
          <StarRating value={reviews.list ? reviews.list.results[0].rating : 0} />
        <a href='http://localhost:3000/'>Read # Reviews</a>
      </div>
      <div className='priceDiv fs-3'>
{/*Possibly change*/}
      {currentStyle.sale_price ? (
      <div id='onSaleDiv'>
        <div id='salePrice'>${currentStyle.sale_price}</div>
        <div id='oldOriginalPrice'>${currentStyle.original_price}</div>
      </div>
      ) : (
      <div id='originalPrice'>${currentStyle.original_price}</div>
      )}
      </div>
    </div>
  );
};

//Could possibly refactor into useState
var mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle
});

var productInfoContainer = connect(mapStateToProps, null)(productInfo);

export default productInfoContainer;
