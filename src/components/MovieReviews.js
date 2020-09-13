// // Code MovieReviews Here
// //should be stateless and functional
import React from 'react';
//the variable reviewAttributes represents all of the attributes of a review as a function
//first it takes the attributes as arguments, then it calls a function with an arrow function that will return JSX elements
const reviewAttributes = ({
    headline,
    byline,
    summary_short
  }) => {
  return (
    <div className="review">
      
        <p>
          {headline}
        </p>
      <h3>{byline}</h3>
      <h3>{summary_short}</h3>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(reviewAttributes)}</div>;
//map is always going to return a new updated array once a new function is called
MovieReviews.defaultProps = {
  reviews: [] // an empty array is set as the default prop because these kind of components can't have any state
};

export default MovieReviews;