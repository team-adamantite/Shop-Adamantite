import React, { useState } from 'react';

const AddStarRating = ({ setUserRating }) => {
  const [value, setValue] = useState(0);

  const handleClick = (val) => {
    setValue(val);
    setUserRating(val);
  };
  // Use .map() or for loop
  return (
    <div className='half-star-rating'>
      <span
        onMouseEnter={() => setValue(1)}
        onClick={() => handleClick(1)}
        value={value}
      >
        <i
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span
        onMouseEnter={() => setValue(2)}
        onClick={() => handleClick(2)}
        value={value}
      >
        <i
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span
        onMouseEnter={() => setValue(3)}
        onClick={() => handleClick(3)}
        value={value}
      >
        <i
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span
        onMouseEnter={() => setValue(4)}
        onClick={() => handleClick(4)}
        value={value}
      >
        <i
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span
        onMouseEnter={() => setValue(5)}
        onClick={() => handleClick(5)}
        value={value}
      >
        <i
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
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
  );
};

export default AddStarRating;
