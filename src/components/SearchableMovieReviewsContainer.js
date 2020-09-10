import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    } 

    handleChange=(e)=>{
        this.setState({
           searchTerm: e.target.value
        })
    }


    
    handleClick = ()=>{
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(json => {
            //debugger
            this.setState({
                reviews: json.reviews
            })
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews" onClick={this.handleClick}>
               <input type="text" value={this.state.searchTerm} onChange={this.handleChange}></input>
               <input type="submit" value="Search"></input>
               <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
