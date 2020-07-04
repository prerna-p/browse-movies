import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE
} from './types';
import axios from 'axios';
import { APIKey } from '../APIKey'
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const URL = `http://www.omdbapi.com/?apikey=${APIKey}`;

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  })
}

export const fetchMovies = text => dispatch => {
  axios
    .get(URL + `&s=${text}`)
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data.Search,
    }))
    .catch(err => console.log(err));
}

export const fetchMovie = id => dispatch => {
  axios
    .get(URL + `&i=${id}`)
    .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data,
    }))
    .catch(err => console.log(err));
}