import types from './movies.types';
import moviesAPI from '../../API/movies.api';

export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchUsersStart())
  try {
    const res = await usersAPI.getUsers()
    if (res.data) {
      dispatch(fetchUsersSuccess(res.data))
    } else {
      dispatch(fetchUsersFailure('error'))
    }
  } catch (e) {
    dispatch(fetchUsersFailure('error'))
  }
}


const fetchMoviesStart = () => ({
  type: types.FETCH_MOVIES_START
})

const fetchMoviesSuccess = (data) => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: data
})

const fetchMoviesFailure = (error) => ({
  type: types.FETCH_USERS_FAILURE,
  payload: error
})

const getUserDataStart = () => ({
  type: types.GET_USERDATA_START
})

const getUserDataSuccess = (data) => ({
  type: types.GET_USERDATA_SUCCESS,
  payload: data
})

const getUserDataFailure = (error) => ({
  type: types.GET_USERDATA_FAILURE,
  payload: error
})
