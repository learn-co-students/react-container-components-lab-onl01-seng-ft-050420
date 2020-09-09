import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=K2axlMGYBIpllKYsGfLEhK7rrtWSZGS8&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
                    <input type="submit" />
                </form>
                <div className="searchable-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer;