import React, { forwardRef } from 'react';
import StarRating from './StarRating';
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Modal
} from 'react-bootstrap';

const Review = forwardRef(
  ({ text, id, sorting, summary, rating, name, date, body }, ref) => (
    <div
      ref={ref}
      className={sorting ? 'review__card_sorting mb-2' : 'review__card mb-3'}
    >
      <Card>
        <ListGroup className='review__listgroup'>
          <ListGroup.Item className='d-inline-block'>
            <Card>
              <div className='review__header d-flex justify-content-between '>
                <StarRating value={rating} />
                <p className='review__date text-end'>
                  {name}, {date.substring(0, 10)}
                </p>
              </div>
              <strong className='text-dark'>{summary}</strong>
              <p>{body}</p>
              <p className='text'>{text}</p>
              <hr />
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
);

export default Review;
