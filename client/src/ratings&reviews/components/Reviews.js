import React from 'react';
import { Container, Card } from 'react-bootstrap';

import { createProductReview } from '../actions';

const Reviews = () => {
  return (
    <Container className='m-2'>
      <Card className='border-1 border-dark text-center'>
        <Card.Body>
          <Card.Title>Ratings & Reviews</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Reviews;
