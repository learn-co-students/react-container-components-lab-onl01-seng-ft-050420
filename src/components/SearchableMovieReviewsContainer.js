import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const API = `&api-key=${NYT_API_KEY}`

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  getResults() {
    fetch(URL + 'query=' + this.state.searchTerm + API)
    .then(res => res.json())
    .then(json => {
      console.log(this.state.searchTerm)
      this.setState({reviews: json.results})
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.getResults()
  }

  handleInputChange = (e) => {
    let query = e.target.value
    this.setState({searchTerm: query})
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSearch}>
          <input type='text' onChange={this.handleInputChange} />
          <input type='submit' />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
