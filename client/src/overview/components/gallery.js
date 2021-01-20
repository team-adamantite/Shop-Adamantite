import React from 'react';
import {connect} from 'react-redux';

var gallery = ({styles, currentStyle}) => {
  return (
    <div id = 'gallery'>
      <img id = 'pic' src= {currentStyle.photos[0].url}></img>
    </div>
  )
}

var mapStateToProps = (state) => (
  {styles: state.productStyles,
  currentStyle: state.currentStyle}
);

var galleryContainer = connect(mapStateToProps, null)(gallery);

export default galleryContainer;