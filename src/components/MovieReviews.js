// Code MovieReviews Here
import React from 'react'

const Review = (json) => {
    return(
    <div key={json.headline} className="review" >
        <header>
            <a className="review-link" href={json.link.url}>{json.headline}</a>
            <br/>
            <span className="author">{json.byline}</span>
        </header>
        <blockquote>{json.summary_short}</blockquote>
     </div>
    )
}

const MovieReviews = (props) =>
    
       <div className="review-list">
           {props.reviews.map(Review)}  
        </div>
    

export default MovieReviews