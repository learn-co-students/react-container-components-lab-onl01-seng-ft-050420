import React from 'react'

const Review = ({headline, byline}) => {
    return (
    <div key={headline} className='review'><header>{headline}</header><span className='author'>{byline}</span></div>
    )
}
const MovieReviews = ({reviews}) => (
<div className='review-list'>{reviews.map(Review)}</div>)

export default MovieReviews