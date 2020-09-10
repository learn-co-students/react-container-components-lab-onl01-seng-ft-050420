import React from 'react'

function MovieReviews(props) {
  let reviews = props.reviews.map((review, index) => {
    return (
      <div key={index} className="review">
        <h2>{review.display_title}</h2>
        <p>{review.byline}</p>
        <h3>{review.headline}</h3>
        <a href="{review.link.url}">{review.link.suggested_link_text}</a>
      </div>
    )
  })

  return (
    <div className="review-list">
      {reviews}
    </div>
  )
}

export default MovieReviews
