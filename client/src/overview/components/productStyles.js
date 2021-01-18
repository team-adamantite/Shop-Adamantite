import React from 'react';
import {connect} from 'react-redux';
import changeStyle from '../overviewActions/currentStyleActions.js';

var productStyles = ({styles, changeStyle, currentStyle}) => {
  console.log(currentStyle)
  var currentSku;
  return (
    <div id = 'productInfo'>
      <label>Style > {currentStyle ? currentStyle.name : styles.results[0].name}
        <div id = 'productCategory'>
          {styles.results.map((style) => {
            return (
              <span className = 'styleSpan' key = {style.style_id}>
                <img className = 'styleImg' src = {style.photos[0].thumbnail_url} onClick = {() => changeStyle(style)}/>
              </span>
            )
          })}
        </div>
      </label>
      <br/>
      <label>Size:
        <span id = 'size'>
          <select>
            {Object.keys(currentStyle.skus).map((keyName) => (
              <option key= {keyName}>{currentStyle.skus[keyName].size}</option>
            ))}
          </select>
        </span>
      </label>
      <label>Qty:
        <span id = 'quantity'>
          <select>
          {Object.keys(currentStyle.skus).map((keyName) => (
              <option key= {keyName}>{currentStyle.skus[keyName].quantity}</option>
            ))}
          </select>
        </span>
      </label>
      <br/>
      <br/>
      <button id = 'addToBag'>Add To Bag</button>
    </div>
  )
}

var mapStateToProps = (state) => (
  {styles: state.productStyles,
  currentStyle: state.currentStyle}
);

var mapDispatchToProps = (dispatch) => {
  return {changeStyle: (style) => dispatch(changeStyle(style))}
};

var productStylesContainer = connect(mapStateToProps, mapDispatchToProps)(productStyles);

export default productStylesContainer;