import React from 'react';
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
  React.useEffect(() => {
    changeStyles(currentProduct.id);
  }, [currentProduct.id]);

  const currentSku = React.useState();

  console.log('this is styles ----->', styles);

  return (
    <div id='productInfo'>
      <label>
        Style {currentStyle ? currentStyle.name : styles.results[0].name}
        <div id='productCategory'>
          {styles.results.map((style) => {
            return (
              <span className='styleSpan' key={style.style_id}>
                <img
                  className='styleThumb'
                  src={style.photos[0].thumbnail_url}
                  onClick={() => changeStyle(style)}
                />
              </span>
            );
          })}
        </div>
      </label>
      <br />
      <label>
        Size:
        <span id='size'>
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
        </span>
      </label>
      <label>
        Qty:
        <span id='quantity'>
          <select>
            {currentSku[0] ? (
              [...Array(currentSku[0].quantity)].map((e, i) => {
                if (i < 15) {
                  return <option key={i + 1}>{i + 1}</option>;
                }
              })
            ) : (
              <option>Select a Size</option>
            )}
          </select>
        </span>
      </label>
      <br />
      <br />
      <button id='addToBag'>Add To Bag</button>
      <div className='sharethis-inline-share-buttons'></div>
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
