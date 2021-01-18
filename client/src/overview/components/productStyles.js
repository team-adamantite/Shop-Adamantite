import React from 'react';

var productStyle = ({ styles }) => {
  return (
    <div id='productInfo'>
      <label>
        Style {styles.results[0].style_id}
        <div id='productCategory'>
          {styles.results.map((style) => {
            return <span key={style.style_id}>{style.style_id} | </span>;
          })}
        </div>
      </label>
      <br />
      <label>
        Size:
        <div id='Size'>
          <select>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
      </label>
      <br />
      <br />
      <button id='addToBag'>Add To Bag</button>
    </div>
  );
};

export default productStyle;
