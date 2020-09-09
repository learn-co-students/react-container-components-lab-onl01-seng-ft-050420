import React from 'react'

function MovieReviews(props) {

    function renderReviews(props) {
        return props.reviews.map(review => {
            return (
            <div className="review">{review.title}</div>
            )    
         })
    }

    return (
    <div className="review-list">
        {renderReviews(props)}
    </div>
    )
}

export default MovieReviews;
