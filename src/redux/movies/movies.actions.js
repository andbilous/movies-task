import types from "./movies.types";
import moviesAPI from "../../API/movies.api";
import { convertTXTtoJSON } from "../../utils/convertTXTtoJSON";
import { generateId } from "../../utils/generateId";

export const fetchMovies = () => async dispatch => {
  dispatch(fetchMoviesStart());
  try {
    const res = await moviesAPI.getMovies();
    if (res.status === 200) {
      dispatch(fetchMoviesSuccess(res.data));
    } else {
      dispatch(fetchMoviesFailure("error"));
    }
  } catch (e) {
    dispatch(fetchMoviesFailure("error"));
  }
};

export const uploadMovies = data => async dispatch => {
  dispatch(uploadMoviesStart());
  let datafromField = convertTXTtoJSON(data).map(item => {
    return {
      ...item,
      id: generateId()
    };
  });
  if (datafromField) {
    dispatch(uploadMoviesSuccess(datafromField));
  } else dispatch(uploadMoviesFailure());
};

const uploadMoviesStart = () => ({
  type: types.UPLOAD_MOVIES_START
});

const uploadMoviesSuccess = data => ({
  type: types.UPLOAD_MOVIES_SUCCESS,
  payload: data
});

const uploadMoviesFailure = error => ({
  type: types.UPLOAD_MOVIES_FAILURE,
  payload: error
});

const fetchMoviesStart = () => ({
  type: types.FETCH_MOVIES_START
});

const fetchMoviesSuccess = data => ({
  type: types.FETCH_MOVIES_SUCCESS,
  payload: data
});

const fetchMoviesFailure = error => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: error
});

export const deleteMovie = id => ({
  type: types.DELETE_MOVIE,
  payload: id
});

export const addMovie = movie => ({
  type: types.ADD_MOVIE,
  payload: movie
});
