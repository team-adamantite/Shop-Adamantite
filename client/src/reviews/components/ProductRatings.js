import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Waypoint } from 'react-waypoint';
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

import Review from './Review';
import Message from './Message';
import BarChart from './BarChart';
import LineChart from './LineChart';
import HalfStarRating from './HalfStarRating';
import StarRating from './StarRating';
import StarAvg from './StarAvg';
import { data, data2, data3, reviews2 } from '../utils/data';
import '../../styles/chart.css';
import '../../styles/reviews.css';

import { getProductReviews } from '../reviewActions/productReviewsActions';

const ProductRatings = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.currentProduct);
  const { id } = product;
  const reviews = useSelector((state) => state.reviews);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProductReviews(id));
    // if (reviews.length) {
    //   setItems(reviews.list.results);
    // }
    // eslint-disable-next-line
  }, [dispatch, id]);

  console.log(reviews2.list.results.length - items.length);

  const loadMoreItems = () => {
    const itemsToAdd = 3;
    const secondsToWait = 2;

    setLoading(true);

    // fake an async ajax call with setTimeout
    setTimeout(() => {
      // add data
      let currentItems = items;
      if (reviews2.list.results.length) {
        for (let i = 0; i < itemsToAdd; i++) {
          currentItems.push(reviews2.list.results.shift());
        }

        setItems(currentItems);
        // setItems(currentItems);
        setLoading(false);
        // setPage((page) => page + 1);
      } else {
        setHasNextPage(false);
      }
    }, secondsToWait * 1000);
  };

  console.log(items);

  return (
    <Container id='reviews__container'>
      <h3 className='reviews__title fs-4 my-3'>RATINGS &amp; REVIEWS</h3>
      <div className='d-flex'>
        <div className='charts__col w-40'>
          <div className='ratings__avg d-flex justify-content-left'>
            <h1 className='ratings__avg_num'>3.5</h1>
            <StarAvg value={3.5} />
          </div>
          <h3 className='chart__title fs-5 my-2' style={{ textAlign: 'left' }}>
            <strong>100%</strong> of reviews recommend this product
          </h3>
          <div className='charts__container'>
            <BarChart data={data} />
            <h4 className='chart__subtitle' style={{ textAlign: 'left' }}>
              Size
            </h4>
            <LineChart data={data2} split={true} />
            <h4 className='chart__subtitle' style={{ textAlign: 'left' }}>
              Comfort
            </h4>
            <LineChart data={data3} split={false} />
          </div>
        </div>
        <div className='reviews__col w-60'>
          {/* {reviews.list && <Message>No Reviews</Message>} */}
          <h4 className='review__sort fs-5' style={{ textAlign: 'left' }}>
            <strong>248 reviews, sorted by </strong>{' '}
            <strong className='review__sort_span'>relevance </strong>
            <div className='chevron'> &#x25BE;</div>
          </h4>

          <div className='__scrollable-parent'>
            {items.map((review) => {
              return (
                // <Review key={review.review_id} review={review} />
                <Fragment key={review.review_id}>
                  <ListGroup>
                    <ListGroup.Item className='d-inline-block'>
                      <div className='review__header d-flex justify-content-between '>
                        <StarRating value={review.rating} />
                        <p className='review__date text-end'>
                          {review.reviewer_name}, {review.date.substring(0, 10)}
                        </p>
                      </div>
                      <strong>{review.summary}</strong>
                      <p>{review.body}</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Fragment>
              );
            })}
            {loading && hasNextPage && (
              <div
                className='spinner-border text-primary text-center  m-2'
                role='status'
              ></div>
            )}
            {!hasNextPage && (
              <div className='text-primary text-center  m-2' role='status'>
                <span>No More Results...</span>
              </div>
            )}
            <div className='infinite-scroll__waypoint'>
              {/* waypoint */}
              {!loading && hasNextPage && (
                <Waypoint onEnter={loadMoreItems} bottomOffset='-1%' />
              )}
            </div>
          </div>
          <div>
            <button
              type='button'
              className='reviews__btn btn btn-outline-dark btn-lg'
            >
              MORE REVIEWS
            </button>
            <button
              type='button'
              className='reviews__btn btn btn-outline-primary btn-lg m-2'
              onClick={handleShow}
            >
              ADD A REVIEW +
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Write A Review</Modal.Title>
              </Modal.Header>
              <div className='d-flex justify-content-between align-items-center m-2'>
                <HalfStarRating value={0} />
              </div>
              <Modal.Body>Modal Form Fields</Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={handleClose}>
                  Submit Review
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductRatings;
