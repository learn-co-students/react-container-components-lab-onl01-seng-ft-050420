import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tpAal9CdQPojo2h2kKnqqw5OQPWRzC6D';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMoviewReviewsContainer extends Component {
    constructor(){
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleSearch = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch(URL + `${this.state.searchTerm}`)
            .then(res => res.json())
            .then(reviewData => this.setState({
            reviews: reviewData.results
        }))
    }



    render(){
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input id='search-input' type='text' onChange={this.handleSearch} />
                    <button type="submit">Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>       
            )
    }
}

