import React from 'react';
import {connect} from 'react-redux';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var gallery = ({styles, currentStyle}) => {
  console.log('what is the photo', currentStyle.photos)
  return (
    <span className = 'gallery'>
    <Carousel width = {'450px'} height = {'400px'}infiniteLoop={true} thumbWidth={"70px"}>
      {currentStyle.photos && currentStyle.photos.map((photo, index) => {
        return (
          <div key={index}>
            <img className = {'galleryPic'} src={photo.url} />
            <p className="legend">photo {index}</p>
          </div>
        )
      })}
    </Carousel>
    </span>
  )
}

var mapStateToProps = (state) => (
  {styles: state.productStyles,
  currentStyle: state.currentStyle}
);

var galleryContainer = connect(mapStateToProps, null)(gallery);

export default galleryContainer;