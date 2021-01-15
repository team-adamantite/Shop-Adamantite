import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

import Review from './Review';

import { getProductReviews } from '../reviewActions/productReviewsActions';

const Reviews = ({ review_list, product }) => {
  const dispatch = useDispatch();
  const { reviews } = review_list;

  // const [rating, setRating] = useState(2);

  useEffect(() => {
    dispatch(getProductReviews(product.id));
    // eslint-disable-next-line
  }, []);

  return (
    <Container className='m-2'>
      <Card className='border-1 border-dark text-center'>
        <Card.Body>
          <Card.Title>Ratings &amp; Reviews</Card.Title>
          {reviews &&
            reviews.results.map((review) => (
              <Review key={review.review_id} review={review} />
            ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  review_list: state.reviews,
  product: state.currentProduct
});

export default connect(mapStateToProps, {
  getProductReviews
})(Reviews);
