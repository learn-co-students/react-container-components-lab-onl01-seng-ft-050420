import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=tOnBOqWAOS4HlEdkDRv19d9VY1uTmAla&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.results,
            searchTerm: e.target.parentNode.value
        }))
    }

    render(){
        return(
        <div className='searchable-movie-reviews'><form onSubmit={this.handleSubmit}><input name='searchTerm' value='searchTerm'/><button onClick={this.handleSubmit} type='submit' name='submit'>Submit</button></form><MovieReviews reviews={this.state.reviews} /></div>
        )
    }
}

export default SearchableMovieReviewsContainer