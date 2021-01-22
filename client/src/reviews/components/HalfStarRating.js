import React, { useState, Fragment } from 'react';

const HalfStarRating = ({ value }) => {
  const [rating, setRating] = useState(0);
  // Use .map() or for loop
  return (
    <Fragment>
      <div className='half-star-rating'>
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'
                : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 2
                ? 'fas fa-star'
                : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 3
                ? 'fas fa-star'
                : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 4
                ? 'fas fa-star'
                : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating >= 5
                ? 'fas fa-star'
                : rating >= 4.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <div className='overlay'>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(0.5)}
            onMouseOut={() => setRating(0)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(1)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(1.5)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(2)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(2.5)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(3)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(3.5)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(4)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(4.5)}
          ></span>
          <span
            className='overlay-item'
            onMouseOver={() => setRating(5)}
          ></span>
        </div>
      </div>
    </Fragment>
  );
};

export default HalfStarRating;
