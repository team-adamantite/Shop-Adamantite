import React, { useState, useEffect, useRef, createRef, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shuffle from 'lodash/shuffle';
import { Waypoint } from 'react-waypoint';
import { Container } from 'react-bootstrap';

// const Review = React.lazy(() => import('./Review'));
// const ReviewModal = React.lazy(() => import('./ReviewModal'));
// const AnimateReviews = React.lazy(() => import('./AnimateReviews'));
// const BarChart = React.lazy(() => import('./BarChart'));
// const LineChart = React.lazy(() => import('./LineChart'));
// const StarRating = React.lazy(() => import('./StarRating'));

import Review from './Review';
import ReviewModal from './ReviewModal';
import AnimateReviews from './AnimateReviews';
import BarChart from './BarChart';
import LineChart from './LineChart';
import StarRating from './StarRating';
import { data2, data3, reviews2, reviews3 } from '../utils/data';

import {
  getProductReviews,
  getProductReviewsMeta,
} from '../reviewActions/productReviewsActions';

const ProductRatings = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.currentProduct);
  const { id } = product;
  const reviews = useSelector((state) => state.reviews);
  const [meta, setMeta] = useState({});
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [removedItems, setRemovedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [chart, updateChart] = useState(false);
  const [sorting, setSorting] = useState(false);
  const [retrieved, setRetreived] = useState(false);
  const [sortType, setSortType] = useState('Relevance');
  const [percent, setPercent] = useState(100);
  const [average, setAverage] = useState(3);
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
    dispatch(getProductReviewsMeta(id));

    // eslint-disable-next-line
  }, [dispatch, id]); // dispatch, id

  useEffect(() => {
    if (reviews.hasOwnProperty('list')) {
      if (!retrieved) {
        setItems([...reviews.list.results]);
        // setMeta(reviews.meta);
        setRetreived(true);
      }

      // if (sortType === 'Surprise Me') {
      //   reorder();
      // } else if (sortType === 'Relevance') {
      //   sortRelevance();
      // } else if (sortType === 'Highest Ratings') {
      //   sortRatingsAsc();
      // } else if (sortType === 'Lowest Ratings') {
      //   sortRatingsDesc();
      // } else if (sortType === 'Helpfulness') {
      //   sortHelpfulness();
      // }

      setPercent(
        (
          (reviews.list.results.filter((review) => review.recommend).length /
            reviews.list.results.length) *
          100
        ).toFixed(0)
      );

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
  }, [reviews]);

  const loadMoreItems = () => {
    if (!retrieved && reviews.list) {
      setItems([...reviews.list.results]);
      setRetreived(true);
    }
    // console.log('loading more items...');
    const itemsToAdd = 3;
    const secondsToWait = 2;
    if (reviews.hasOwnProperty('list')) {
      setLoading(true);
      setTimeout(() => {
        // add data
        let currentItems = [...items];
        if (reviews3.list.results.length) {
          for (let i = 0; i < itemsToAdd; i++) {
            if (reviews3.list.results.length) {
              currentItems.push(reviews3.list.results.shift());
            }
          }
          setItems(currentItems);
          setLoading(false);
          // setPage((page) => page + 1);
        } else {
          setLoading(false);
          setHasNextPage(false);
        }
      }, secondsToWait * 1000);
    }
  };

  const reorder = () => {
    setSorting(true);
    setSortType('Surprise Me');
    setItems([...shuffle(items)]);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  const sortRatingsAsc = () => {
    setSorting(true);
    setSortType('Highest Ratings');
    setItems([...items.sort((a, b) => (a.rating < b.rating ? 1 : -1))]);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  const sortRatingsDesc = () => {
    setSorting(true);
    setSortType('Lowest Ratings');
    setItems([...items.sort((a, b) => (a.rating > b.rating ? 1 : -1))]);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  const sortHelpfulness = () => {
    setSorting(true);
    setSortType('Helpfulness');
    setItems([
      ...items.sort((a, b) =>
        a.helpfulness < b.helpfulness ? 1 : a.rating < b.rating ? 0 : -1
      ),
    ]);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  const sortRelevance = () => {
    setSorting(true);
    setSortType('Relevance');
    setItems([
      ...items.sort((a, b) =>
        a.rating < b.rating ? 1 : a.helpfulness < b.helpfulness ? 0 : -1
      ),
    ]);

    setTimeout(() => {
      setSorting(false);
    }, 1200);
  };

  // console.log(reviews);
  // console.log(items);

  return (
    <Container id="reviews__container">
      <h3 className="reviews__title fs-4 my-3">RATINGS &amp; REVIEWS</h3>
      <div className="d-flex">
        <div
          className="charts__col w-40"
          style={{ width: expandedView ? '30vw' : '40vw' }}
        >
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <div className="ratings__avg d-flex justify-content-left">
            <h1 className="ratings__avg_num" ref={block}>
              {average}
            </h1>
            <StarRating value={average} type="avg" />
          </div>
          <h3 className="chart__title fs-5 my-2" style={{ textAlign: 'left' }}>
            <strong>{percent}%</strong> of reviews recommend this product
          </h3>
          {/* </Suspense> */}

          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <div className="charts__container">
            {items.length > 0 && <BarChart reviews={reviews} />}
            <h4 className="chart__subtitle" style={{ textAlign: 'left' }}>
              Size
            </h4>
            <LineChart data={data2} split={true} />
            <h4 className="chart__subtitle" style={{ textAlign: 'left' }}>
              Comfort
            </h4>
            <LineChart data={data3} split={false} />
          </div>
          {/* </Suspense> */}
        </div>
        <div
          className="reviews__col w-60"
          style={{ width: expandedView ? '70vw' : '60vw' }}
        >
          <div className="dropdown-group">
            <h4 className="review__sort fs-5" style={{ textAlign: 'left' }}>
              <strong>
                {items.length > 0 && items.length} reviews, sorted by{' '}
              </strong>{' '}
            </h4>
            <div className="dropdown">
              <button className="dropdown-btn fs-5">
                <strong>{sortType}</strong>
              </button>
              <div className="dropdown-content">
                <a onClick={sortRelevance}>Relevance</a>
                <a onClick={sortHelpfulness}>Helpfulness</a>
                <a onClick={sortRatingsAsc}>Highest Rating</a>
                <a onClick={sortRatingsDesc}>Lowest Rating</a>
                <a onClick={reorder}>Surprise Me</a>
              </div>
            </div>
            <div className="dropdown-chevron"> &#x25BE;</div>
          </div>

          <div
            className="__scrollable-parent"
            style={{ height: expandedView ? '86vh' : '660px' }}
          >
            {items.length > 0 && !loading ? (
              <AnimateReviews>
                {items.map(
                  ({
                    review_id,
                    summary,
                    rating,
                    reviewer_name,
                    response,
                    helpfulness,
                    recommend,
                    date,
                    body,
                  }) => (
                    <Review
                      key={review_id}
                      id={review_id}
                      text={summary}
                      date={date}
                      name={reviewer_name}
                      body={body}
                      response={response}
                      helpfulness={helpfulness}
                      recommend={recommend}
                      rating={rating}
                      ref={createRef()}
                      sorting={sorting}
                    />
                  )
                )}
              </AnimateReviews>
            ) : (
              items.map(
                ({
                  review_id,
                  summary,
                  rating,
                  reviewer_name,
                  response,
                  helpfulness,
                  recommend,
                  date,
                  body,
                }) => (
                  <Review
                    key={review_id}
                    id={review_id}
                    text={summary}
                    date={date}
                    name={reviewer_name}
                    body={body}
                    response={response}
                    helpfulness={helpfulness}
                    recommend={recommend}
                    rating={rating}
                    ref={createRef()}
                    sorting={sorting}
                  />
                )
              )
            )}

            {loading && hasNextPage && (
              <div
                className="spinner-border text-primary text-center  m-2"
                role="status"
              ></div>
            )}
            {!hasNextPage && (
              <div className="text-primary text-center  m-2" role="status">
                <span>No More Results...</span>
              </div>
            )}

            <div className="infinite-scroll__waypoint">
              {!loading && hasNextPage && (
                <Waypoint onEnter={loadMoreItems} bottomOffset="-1%" />
              )}
            </div>
          </div>
          <div>
            <button
              type="button"
              className="reviews__btn btn btn-outline-dark btn-lg"
              onClick={(e) => {
                setExpandedView((prevView) => !prevView);
                handleScrollToElement(e);
              }}
            >
              {expandedView ? 'LESS REVIEWS' : 'MORE REVIEWS'}
            </button>
            <button
              type="button"
              className="reviews__btn btn btn-outline-primary btn-lg m-2"
              onClick={handleShow}
            >
              ADD A REVIEW +
            </button>
          </div>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        {reviews.hasOwnProperty('list') && reviews.hasOwnProperty('meta') && (
          <ReviewModal
            meta={reviews.meta}
            show={show}
            handleClose={handleClose}
            id={id}
            sortType={sortType}
            setSortType={setSortType}
            review_id={
              reviews.list.results[reviews.list.results.length - 1].review_id +
              1
            }
          />
        )}
        {/* </Suspense> */}
      </div>
    </Container>
  );
};

export default ProductRatings;
