import React from 'react';
import {connect} from 'react-redux';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

var gallery = ({styles, currentStyle}) => {
  console.log('what is the photo', currentStyle.photos)
  return (
    <span className = 'gallery'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  {currentStyle.photos ? currentStyle.photos.map((photo, index) => {
    return (
      <div className="carousel-item">
        <img src= {photo.url} key = {index} className="d-block w-100" alt="..."/>
      </div>
    )}
  ): <div/>}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </span>
)
}

var mapStateToProps = (state) => (
  {styles: state.productStyles,
  currentStyle: state.currentStyle}
);

var galleryContainer = connect(mapStateToProps, null)(gallery);

export default galleryContainer;