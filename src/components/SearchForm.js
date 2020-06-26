import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions/searchActions'

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for titles, genres...
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="a beautiful mind"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
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
})
export default connect(mapStateToProps, { searchMovie })(SearchForm);
