import types from "./movies.types";
import moviesAPI from "../../API/movies.api";

export const fetchMovies = () => async dispatch => {
  dispatch(fetchMoviesStart());
  try {
    const res = await moviesAPI.getMovies();
    if (res.data) {
      dispatch(fetchMoviesSuccess(res.data));
    } else {
      dispatch(fetchUsersFailure("error"));
    }
  } catch (e) {
    dispatch(fetchUsersFailure("error"));
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

const getUserDataStart = () => ({
  type: types.GET_USERDATA_START
});

const getUserDataSuccess = data => ({
  type: types.GET_USERDATA_SUCCESS,
  payload: data
});

const getUserDataFailure = error => ({
  type: types.GET_USERDATA_FAILURE,
  payload: error
});
