// Code MovieReviews Here
//should be stateless and functional

import React from 'react';

const MovieReviews = ({review}) => (
    <div className = "review-list">
      <h3>{review}</h3>
    </div>
)

export default MovieReviews;