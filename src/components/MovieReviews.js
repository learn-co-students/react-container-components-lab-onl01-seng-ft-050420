import React from 'react'

function MovieReviews(props) {
    let reviewArray = props.reviews.map((review, index) => {
        return (
            <div key={index} className="review">
                <h1>{review.display_title}</h1>
                <p>{review.byline}</p>
                <h3>{review.headline}</h3>
                <a href="{review.link.url}">{review.link.suggested_link_text}</a>
            </div>
        )
    })
    


    return (
        <div className="review-list">
            {reviewArray}
        </div>
    )
}

export default MovieReviews