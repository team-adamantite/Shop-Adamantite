import React, { useState, Fragment } from 'react';

const AddStarRating = () => {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);
  // Use .map() or for loop
  return (
    <Fragment>
      <div className='half-star-rating'>
        <span
          onMouseEnter={() => setRating(1)}
          onMouseLeave={() => !value && setRating(0)}
          onClick={() => setValue(1)}
          value={rating ? (value ? value : rating) : 0}
        >
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
        <span
          onMouseEnter={() => setRating(2)}
          onMouseLeave={() => !value && setRating(0)}
          onClick={() => setValue(2)}
          value={rating ? (value ? value : rating) : 0}
        >
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
        <span
          onMouseEnter={() => setRating(3)}
          onMouseLeave={() => !value && setRating(0)}
          onClick={() => setValue(3)}
          value={rating ? (value ? value : rating) : 0}
        >
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
        <span
          onMouseEnter={() => setRating(4)}
          onMouseLeave={() => !value && setRating(0)}
          onClick={() => setValue(4)}
          value={rating ? (value ? value : rating) : 0}
        >
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
        <span
          onMouseEnter={() => setRating(5)}
          onMouseLeave={() => !value && setRating(0)}
          onClick={() => setValue(5)}
          value={rating ? (value ? value : rating) : 0}
        >
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
        {/* <div className='overlay'> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(0.5)}
            onMouseOut={() => setRating(0)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(1)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(1.5)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(2)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(2.5)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(3)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(3.5)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(4)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(4.5)}
          ></span> */}
        {/* <span
            className='overlay-item'
            onMouseOver={() => setRating(5)}
          ></span> */}
        {/* </div> */}
      </div>
    </Fragment>
  );
};

export default AddStarRating;
