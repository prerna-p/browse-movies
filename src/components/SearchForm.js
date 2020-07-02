import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies } from '../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            search for titles, genres...
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="a beautiful mind"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-secondary btn-lg btn-block mt-3">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // state: global state of the application
  // movies: combined reducer from reducers/index.js
  text: state.movies.text,
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies }
)(SearchForm);
