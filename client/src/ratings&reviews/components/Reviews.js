import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

import StarRating from './Rating';

import { createProductReview } from '../actions';

const Reviews = () => {
  const [rating, setRating] = useState(2);

  return (
    <Container className='m-2'>
      <Card className='border-1 border-dark text-center'>
        <Card.Body>
          <Card.Title>Ratings & Reviews</Card.Title>
          <StarRating value={rating} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Reviews;
