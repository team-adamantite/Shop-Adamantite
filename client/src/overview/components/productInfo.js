import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import StarRating from '../../reviews/components/StarRating';

var productInfo = ({ currentProduct, currentStyle }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  // console.log('reviews -------->', reviews)
  return (
    <div id='productInfo'>
      <span>
        <StarRating value={reviews.list ? reviews.list.results[0].rating : 0} />
      </span>
      <a href='http://localhost:3000/'>Read all Reviews</a>
      <br />
      <br />
      <label>
        Category:
        <div id='productCategory'>{currentProduct.category}</div>
      </label>
      <br />
      {currentStyle.sale_price ? (
        <div>
          <label>
            Sale Price:
            <div id='productName'>{currentStyle.sale_price}</div>
          </label>
          <label>
            Price:
            <div id='productName'>{currentStyle.original_price}</div>
          </label>
        </div>
      ) : (
        <label>
          Price:
          <div id='productName'>{currentStyle.original_price}</div>
        </label>
      )}
    </div>
  );
};

var mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle
});

var productInfoContainer = connect(mapStateToProps, null)(productInfo);

export default productInfoContainer;
