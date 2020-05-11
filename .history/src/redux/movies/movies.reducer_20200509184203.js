import types from "./movies.types";

const initialValues = {
  movies: [],
  isLoading: false
};

const moviesReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case types.FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        movies: []
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload
      };
    case types.GET_USERDATA_FAILURE:
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};

export default moviesReducer;
