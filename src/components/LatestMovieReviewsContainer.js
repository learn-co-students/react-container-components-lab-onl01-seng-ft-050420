import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tpAal9CdQPojo2h2kKnqqw5OQPWRzC6D';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()

        this.state = {
            reviews: []
        };
    }

    fetchReviews = () => {
        fetch(URL)
            .then(res => res.json())
            .then(reviewData => this.setState({
                reviews: reviewData.results
            }))
    }

    componentDidMount(){
        this.fetchReviews();
    }

    render(){
        return (
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}


