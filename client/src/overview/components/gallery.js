import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';

var gallery = ({ styles, currentStyle }) => {

  var newImages = [];

  if (!currentStyle.photos) {
    return null;
  } else {
    for (let image of currentStyle.photos) {
      newImages.push({
        original: image.url,
        thumbnail: image.thumbnail_url,

      });
    }
    console.log('newimage', newImages);
    return (
      <div className = 'carouselDiv'>
        <ImageGallery className = 'imageGallery'
          items={newImages}
          thumbnailPosition={'left'}
          showBullets={false}
          autoPlay={false}
          showPlayButton={false}
          slideInterval={3000}
        />
      </div>
    );
  }
};

var mapStateToProps = (state) => ({
  styles: state.productStyles,
  currentStyle: state.currentStyle
});

var galleryContainer = connect(mapStateToProps, null)(gallery);

export default galleryContainer;
