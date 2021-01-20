import React from 'react';
import {connect} from 'react-redux';
import changeStyle from '../overviewActions/currentStyleActions.js';
import getStyles from '../overviewActions/stylesActions.js';


var productStyles = ({currentProduct, styles, currentStyle, changeStyles, changeStyle}) => {
  React.useEffect(() => {
    changeStyles(currentProduct.id)
    // if (reviews.length) {
    //   setItems(reviews.list.results);
    // }
    // eslint-disable-next-line
  }, [currentProduct.id]);

  const state = React.useState(currentStyle.skus[Object.keys(currentStyle.skus)[0]])

  console.log('this is styles ----->',styles)


  return (
    <div id = 'productInfo'>
      <label>Style > {currentStyle ? currentStyle.name : styles.results[0].name}
        <div id = 'productCategory'>
          {styles.results.map((style) => {
            return (
              <span className = 'styleSpan' key = {style.style_id}>
                <img className = 'styleThumb' src = {style.photos[0].thumbnail_url} onClick = {() => changeStyle(style)}/>
              </span>
            )
          })}
        </div>
      </label>
      <br/>
      <label>Size:
        <span id = 'size'>
          <select onChange = {(e) => state[1](currentStyle.skus[e.target.value])}>
            <option>Select Size</option>
            {Object.keys(currentStyle.skus).map((keyName) => (
              <option key= {keyName} value = {keyName}>{currentStyle.skus[keyName].size}</option>
            ))}
          </select>
        </span>
      </label>
      <label>Qty:
        <span id = 'quantity'>
          <select>
            {(state[0]) ? [...Array(state[0].quantity)].map((e, i) => {
              if (i < 15) {return <option key={i + 1}>{i + 1}</option>}
            }): <option>Select a Size</option>}
          </select>
        </span>
      </label>
      <br />
      <br />
      <button id='addToBag'>Add To Bag</button>
      {/* <div class="fb-share-button" data-href="http://localhost:3000/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
      <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet"
        data-size="small"
        data-text="Check out what I just purchased"
        data-url="http://localhost:3000/"
        data-hashtags="comeup,freshgear,teamadamtite"
        data-via="twitterdev"
        data-related="teamadamtite">
        Tweet
        </a> */}
        <div className="sharethis-inline-share-buttons"></div>
    </div>
  );
};


var mapStateToProps = (state) => (
  {currentProduct: state.currentProduct,
  styles: state.productStyles,
  currentStyle: state.currentStyle}
);

var mapDispatchToProps = (dispatch) => {
  return {changeStyle: (style) => dispatch(changeStyle(style)),
  changeStyles: (productId) => dispatch(getStyles(productId))}
};

var productStylesContainer = connect(mapStateToProps, mapDispatchToProps)(productStyles);

export default productStylesContainer;