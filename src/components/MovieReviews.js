
import React from 'react'

function MovieReviews(props) {

  return (
    <div className="review-list">
      {props.reviews.map((result, index) => {
        return (
          <div key={index} className="review">
            <h1>{result.display_title}</h1>
            <p><em>{result.byline}</em></p>
            <h3>{result.headline}</h3>
            <a href="{result.link.url}">{result.link.suggested_link_text}</a>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews
