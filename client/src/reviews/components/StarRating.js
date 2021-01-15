import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';

const StarRating = ({ value }) => {
  return (
    <Box component='fieldset' mb={1} borderColor='transparent'>
      <Rating
        name='customized-empty'
        defaultValue={value}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize='inherit' />}
      />
    </Box>
  );
};

export default StarRating;
