import React from 'react';

const MovieReviews = ({ reviews }) => {
    return (
        <div className ="review-list">
            {reviews.map(review => 
                <div className="review">
                    <h3> {review.display_title} - {review.summary_short}</h3>
                </div>
            )}
        </div>
    )
}

export default MovieReviews;

