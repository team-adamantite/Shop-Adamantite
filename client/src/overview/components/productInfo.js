import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import StarRating from '../../reviews/components/StarRating';

var productInfo = ({ currentProduct, currentStyle }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  return (
    <div id='productInfo'>
      <div id='overviewReviews'>
          <StarRating value={reviews.list ? reviews.list.results[0].rating : 0} />
        <a href='http://localhost:3000/'>Read all Reviews</a>
      </div>
      <label>
        Category:
        <div id='productCategory'>{currentProduct.category}</div>
      </label>
{/*Possibly change*/}
      {currentStyle.sale_price ? (
        <>
          <label>
            Sale Price:
            <div id='salePrice'>{currentStyle.sale_price}</div>
          </label>
          <label>
            Price:
            <div id='originalPrice'>{currentStyle.original_price}</div>
          </label>
        </>
      ) : (
        <label>
          Price:
          <div id='oldOriginalPrice'>{currentStyle.original_price}</div>
        </label>
      )}
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
