import React from 'react';

var gallery = ({styles}) => {
  return (
    <div id = 'gallery'>
      <img id = 'pic' src= {styles.results[0].photos[0].url}></img>
    </div>
  )
}

export default gallery;