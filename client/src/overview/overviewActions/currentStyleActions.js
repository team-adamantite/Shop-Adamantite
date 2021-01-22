var changeStyle = (style) => {
  style.photos = style.photos.map((image) => {
    let resized = image.url.split(`&w=`)[0];
    let size = image.url.split(`&q=`)[0];
    size = size.split(`&w=`)[1];
    size = Number(size) / 4;
    let query = Number(image.url.split(`&q=`)[1]);
    let originalResized = `${resized}&w=${size}`;

    let thumbResized = image.thumbnail_url.split(`&w=`)[0];
    let thumbSize = image.thumbnail_url.split(`&q=`)[0];
    thumbSize = thumbSize.split(`&w=`)[1];
    thumbSize = Number(thumbSize) / 4;
    let thumbQuery = Number(image.thumbnail_url.split(`&q=`)[1]);
    let thumbnailResized = `${thumbResized}&w=${thumbSize}`;

    return {
      url: originalResized,
      thumbnail_url: thumbnailResized
    };
  });
  return {
    type: 'SELECT_STYLE',
    payload: style
  };
};

export default changeStyle;
