
import React, {useEffect, useState} from 'react';
import { connect, useDispatch, useSelector} from 'react-redux';
import StarRating from '../../reviews/components/StarRating';
import {getProductReviews} from '../../reviews/reviewActions/productReviewsActions';

var productInfo = ({ currentProduct, currentStyle }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getProductReviews(currentProduct.id));
  }, [dispatch, currentProduct.id])

  const [average, setAverage] = useState(3);

  useEffect(() => {
    if (reviews.hasOwnProperty('list')){
      setAverage(
        ((
          reviews.list.results
            .map((review) => review.rating)
            .reduce((acc, current) => acc + current, 0) /
          reviews.list.results.reduce((acc) => acc + 5, 0)
        ).toFixed(1) *
          10) /
          2
      );
    }
  }, [reviews])


  return (
    <div id='productInfo'>
      <div className='py-0' id='productName'>{currentProduct.name}</div>
      <div id='productCategory'>{currentProduct.category}</div>
      <div id='overviewReviews'>
          <StarRating value={average} type='avg' />
        <a id='reviewsLink' href='#reviews__container'> Read {reviews.list ? reviews.list.results.length : 0} Reviews</a>
      </div>
      <div className='priceDiv'>
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
