import React from 'react';
import { Container, Card } from 'react-bootstrap';

import StarRating from './StarRating';

const Review = ({ review }) => {
  return (
    <Container className='m-1'>
      <Card className='border-1 border-dark text-center'>
        <Card.Body>
          <Container
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <StarRating value={review.rating} />
            <h6 className='m-1'>
              <strong>{review.summary}</strong>
            </h6>
          </Container>
          <h6>{review.body}</h6>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Review;
