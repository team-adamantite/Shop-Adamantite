import React, { useState, useEffect, useRef, createRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from 'lodash/shuffle';
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
import AnimateReviews from './AnimateReviews';
import Message from './Message';
import BarChart from './BarChart';
import LineChart from './LineChart';
import HalfStarRating from './HalfStarRating';
import StarRating from './StarRating';
import StarAvg from './StarAvg';
import { data, data2, data3, reviews2, reviews3 } from '../utils/data';
import '../../styles/chart.css';
import '../../styles/reviews.css';

import { getProductReviews } from '../reviewActions/productReviewsActions';
import { reviews } from '../../dummyData';

const ProductRatings = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.currentProduct);
  const { id } = product;
  const reviews = useSelector((state) => state.reviews);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [items, setItems] = useState([]);
  const [removedItems, setRemovedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [show, setShow] = useState(false);
  const [expandedView, setExpandedView] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const block = useRef(null);

  const handleScrollToElement = function (e) {
    setTimeout(() => {
      block.current.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  useEffect(() => {
    dispatch(getProductReviews(id));

    if (reviews.length) {
      setItems(reviews.list.results);
    }

    setTimeout(() => {
      reorder();
    }, 1200);

    setSorting(false);
    // eslint-disable-next-line
  }, [reorder]); // dispatch, id

  const loadMoreItems = () => {
    const itemsToAdd = 3;
    const secondsToWait = 2;

    setLoading(true);

    setTimeout(() => {
      // add data
      let currentItems = items;
      if (reviews2.list.results.length) {
        for (let i = 0; i < itemsToAdd; i++) {
          currentItems.push(reviews2.list.results.shift());
        }

        setItems(currentItems);
        setLoading(false);
        // setPage((page) => page + 1);
      } else {
        setHasNextPage(false);
      }
    }, secondsToWait * 1000);
  };

  const reorder = () => {
    const shuffled = shuffle(items);
    setItems(shuffled);
    setSorting(true);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  // console.log(items);

  return (
    <Container id='reviews__container'>
      <h3 className='reviews__title fs-4 my-3'>RATINGS &amp; REVIEWS</h3>
      <div className='d-flex'>
        <div
          className='charts__col w-40'
          style={{ width: expandedView ? '30vw' : '40vw' }}
        >
          <div className='ratings__avg d-flex justify-content-left'>
            <h1 className='ratings__avg_num' ref={block}>
              3.5
            </h1>
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
        <div
          className='reviews__col w-60'
          style={{ width: expandedView ? '70vw' : '60vw' }}
        >
          {/* {reviews.list && <Message>No Reviews</Message>} */}
          <div className='dropdown-group'>
            <h4 className='review__sort fs-5' style={{ textAlign: 'left' }}>
              <strong>248 reviews, sorted by </strong>{' '}
            </h4>
            <div className='dropdown'>
              <button className='dropbtn fs-5'>
                <strong>Relevance</strong>
              </button>
              <div className='dropdown-content'>
                <a onClick={reorder}>Relevance</a>
                <a onClick={reorder}>Highest Rating</a>
              </div>
            </div>
            <div className='chevron'> &#x25BE;</div>
          </div>

          <div
            className='__scrollable-parent'
            style={{ height: expandedView ? '86vh' : '660px' }}
          >
            {items.length && loading ? (
              items.map(
                ({ review_id, summary, rating, reviewer_name, date, body }) => (
                  <Review
                    key={review_id}
                    id={review_id}
                    text={summary}
                    date={date}
                    name={reviewer_name}
                    body={body}
                    rating={rating}
                    ref={createRef()}
                    sorting={sorting}
                  />
                )
              )
            ) : (
              <AnimateReviews>
                {items.map(
                  ({
                    review_id,
                    summary,
                    rating,
                    reviewer_name,
                    date,
                    body
                  }) => (
                    <Review
                      key={review_id}
                      id={review_id}
                      text={summary}
                      date={date}
                      name={reviewer_name}
                      body={body}
                      rating={rating}
                      ref={createRef()}
                      sorting={sorting}
                    />
                  )
                )}
              </AnimateReviews>
            )}

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
              {!loading && hasNextPage && (
                <Waypoint onEnter={loadMoreItems} bottomOffset='-1%' />
              )}
            </div>
          </div>
          <div>
            <button
              type='button'
              className='reviews__btn btn btn-outline-dark btn-lg'
              onClick={(e) => {
                setExpandedView((prevView) => !prevView);
                handleScrollToElement(e);
              }}
            >
              {expandedView ? 'LESS REVIEWS' : 'MORE REVIEWS'}
            </button>
            <button
              type='button'
              className='reviews__btn btn btn-outline-primary btn-lg m-2'
              onClick={handleShow}
            >
              ADD A REVIEW +
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductRatings;
