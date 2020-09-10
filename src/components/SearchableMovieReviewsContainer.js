import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
    export default class SearchableMovieReviewsContainer extends Component{

        constructor(){
            super()
            this.state = {reviews: [], searchTerm: '' }
        }

        handleSubmit = (event) => {
            event.preventDefault()
            
            let searchURL = URL + this.state.searchTerm;

            fetch(searchURL)
                .then(res => res.json())
                .then(res => this.setState({reviews: res.results}));
        }

        handleChange = (event) => {
            this.setState({searchTerm: event.target.value})
        }

        render(){


            return(
                    <div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange}></input>
                            <button type="submit">Submit</button>
                        </form>

                        <MovieReviews reviews={this.state.reviews} />

                    </div>
            )
        }




    }