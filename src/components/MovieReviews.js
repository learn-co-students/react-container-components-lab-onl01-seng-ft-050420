// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>;


const Review = ({
}) => {
  return (
    <div className="review-list">
    <span className="review"></span>
    </div>
  );
};

export default MovieReviews