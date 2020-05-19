import types from "./movies.types";
import moviesAPI from "../../API/movies.api";
import { generateId, transformToFirstLetterUppercase } from "../../utils";

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
  let dataToAdd = data.map(item => {
    return {
      ...item,
      Title: transformToFirstLetterUppercase(item.Title),
      id: generateId()
    };
  });
  dispatch(uploadMoviesSuccess(dataToAdd));
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

export const fetchMoviesFailure = error => ({
  type: types.FETCH_MOVIES_FAILURE,
  payload: error
});

export const deleteMovie = id => ({
  type: types.DELETE_MOVIE,
  payload: id
});

export const addMovie = movie => ({
  type: types.ADD_MOVIE,
  payload: { ...movie, id: generateId() }
});

export const dismissSuccessAdd = () => ({
  type: types.DISMISS_SUCCESS_ADD
});

export const dismissSuccessDelete = () => ({
  type: types.DISMISS_SUCCESS_DELETE
});

export const dismissErrorUpload = () => ({
  type: types.DISMISS_ERROR_UPLOAD
});

export const dismissSuccessUpload = () => ({
  type: types.DISMISS_SUCCESS_UPLOAD
});
