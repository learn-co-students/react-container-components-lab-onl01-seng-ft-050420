import React from 'react'

const MovieReviews = ({reviews}) => {
    function renderReviews() {
      return reviews.map((review, index) => {
        return (
          <div className='review' key={index}>
            <h2>{review.display_title}</h2>
            <img src={review.multimedia.src} height='140' width='210' />
            <h3>{review.headline}</h3>
            <p>{review.summary_short}</p>
          </div>
        )
    })
  }

    return (
      <div className='review-list'>
        {renderReviews()}
      </div>
    )
}

export default MovieReviews
