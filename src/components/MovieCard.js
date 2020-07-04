import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-light text-center h-100">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
          <h6 className="card-title">
            {movie.Title} ({movie.Year})
          </h6>
          <Link className="btn btn-outline-dark" to={'/movie/' + movie.imdbID}>
            more details..
          </Link>
        </div>
      </div>
    )
  }
}

export default MovieCard;
