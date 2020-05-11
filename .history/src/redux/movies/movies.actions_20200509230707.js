import types from "./movies.types";
import moviesAPI from "../../API/movies.api";

export const fetchMovies = () => async dispatch => {
  dispatch(fetchMoviesStart());
  try {
    const res = await moviesAPI.getMovies();
    if (res) {
      dispatch(fetchMoviesSuccess(res));
    } else {
      dispatch(fetchMoviesFailure("error"));
    }
  } catch (e) {
    dispatch(fetchMoviesFailure("error"));
  }
};

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

// const getUserDataSuccess = data => ({
//   type: types.GET_USERDATA_SUCCESS,
//   payload: data
// });

// const getUserDataFailure = error => ({
//   type: types.GET_USERDATA_FAILURE,
//   payload: error
// });
