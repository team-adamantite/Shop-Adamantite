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
  const [selected, setSelected] = useState('');
  useEffect(() => {
    changeStyles(currentProduct.id);
  }, [currentProduct.id]);

  const currentSku = useState();

  return (
    <div>
      <div className='styleName fs-0'>
        Style: {currentStyle ? currentStyle.name : styles.results[0].name}
      </div>
      <div id='productStyles'>
        {styles.results.map((style) => {
          return (
            <span className='styleSpan' key={style.style_id}>
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
            </span>
          );
        })}
      </div>
      <div id='sizeQuant'>
        <div id='size'>
          <select
            onChange={(e) => currentSku[1](currentStyle.skus[e.target.value])}
          >
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
            <select className='dropDown'>
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
        <button type='button' className='btn btn-primary btn-sm addToCart'>
          Add To Cart
        </button>
      </div>
      <div className='shareButtons'>
        <div className='sharethis-inline-share-buttons'></div>
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
