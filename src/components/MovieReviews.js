// Code MovieReviews Here

import React from 'react'

const Review = ({ multimedia, headline, byline, summary_short, link, display_title }) => {
    return(
        <div key={ display_title } className="review">
            <h3>{ headline }</h3>
            <h4>{ byline }</h4>
            <p>{ summary_short }</p>
            <a href={ link.url }>Full Review</a>
        </div>
    )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>



MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews