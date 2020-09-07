import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json.results);
        this.setState({
          reviews: json.results,
          searchTerm: "",
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input
            type="textarea"
            name="searchTerm"
            placeholder="Search Movie"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <input type="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
