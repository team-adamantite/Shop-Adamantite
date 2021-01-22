import React from 'react';
import { connect } from 'react-redux';

import ImageGallery from 'react-image-gallery';

var gallery = ({ styles, currentStyle }) => {
  // console.log('what is the photo', currentStyle.photos);

  if (!currentStyle.photos) {
    return null;
  } else {
    var newImages = [];
    for (let image of currentStyle.photos) {
      newImages.push({
        original: image.url,
        thumbnail: image.thumbnail_url
      });
    }
    // console.log('newimage', newImages);
    return (
      <div
        style={{
          width: '55%',
          height: 'auto',
          maxWidth: '200px',
          maxHeight: '400px'
        }}
      >
        <ImageGallery
          style={{ maxWidth: '200px', maxHeight: '400px' }}
          items={newImages}
          thumbnailPosition={'left'}
          showBullets={true}
          autoPlay={false}
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
