import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import changeStyle from '../overviewActions/currentStyleActions.js';
import getStyles from '../overviewActions/stylesActions.js';

var productStyles = ({
  currentProduct,
  styles,
  currentStyle,
  changeStyles,
  changeStyle
}) => {
  useEffect(() => {
    changeStyles(currentProduct.id);
  }, [currentProduct.id]);

  const currentSku = useState();

  const [selected, setSelected] = useState('');


  return (
    <div>
      <div className='styleName'>
        Style: {currentStyle ? currentStyle.name : styles.results[0].name}
      </div>
      <div id='productStyles'>
        {styles.results.map((style) => {
          return (
            <img
                className={
                  selected === style.style_id
                    ? 'styleThumb thumb__clicked'
                    : 'styleThumb'
                }
                src={style.photos[0].thumbnail_url}
                onClick={() => {
                  changeStyle(style);
                  setSelected(style.style_id);
                }}
            />
          );
        })}
      </div>
        <div id='sizeQuant'>
          <div id='size'>
            <select
              className = 'dropDown'
              onChange={(e) => currentSku[1](currentStyle.skus[e.target.value])}>
              <option>Select Size</option>
              {currentStyle.skus ? (
                Object.keys(currentStyle.skus).map((keyName) => (
                  <option key={keyName} value={keyName}>
                    {currentStyle.skus[keyName].size}
                  </option>
                ))
              ) : (
                <option> No sizes available</option>
              )}
            </select>
          </div>
          <div>
            <span id='quantity'>
              <select className = 'dropDown'>
                {currentSku[0] ? (
                  [...Array(currentSku[0].quantity)].map((e, i) => {
                    if (i < 15) {
                      return <option key={i + 1}>{i + 1}</option>;
                    }
                  })
                ) : (
                  <option>Select Qty</option>
                )}
              </select>
            </span>
          </div>
          <button type="button" className="btn btn-primary btn-sm addToCart">Add To Cart</button>
        </div>
      <div className = 'shareButtons'>
        <div className='socialButtons'>
        <a href = "https://twitter.com/intent/tweet?button_hashtag=teamadamanatite&ref_src=twsrc%5Etfw" >
          <i className="fab fa-twitter-square shareIcon" id= 'twitter'></i>
        </a>
        <a href="http://pinterest.com/pin/create/button/?url={http://www.teamadamanatite.com}" className="pin-it-button" count-layout="horizontal">
          <i className="fab fa-pinterest-square shareIcon" id='pinterest'></i>
        </a>
        <a href = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.teamadamanatite.com%2F&amp;src=sdkpreparse">
          <i className="fab fa-facebook-square shareIcon" id='facebook'></i>
        </a>
        </div>
      </div>
    </div>
  );
};

var mapStateToProps = (state) => ({
  currentProduct: state.currentProduct,
  styles: state.productStyles,
  currentStyle: state.currentStyle
});

var mapDispatchToProps = (dispatch) => {
  return {
    changeStyle: (style) => dispatch(changeStyle(style)),
    changeStyles: (productId) => dispatch(getStyles(productId))
  };
};

var productStylesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(productStyles);

export default productStylesContainer;
