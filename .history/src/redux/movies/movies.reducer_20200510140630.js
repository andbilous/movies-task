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
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload
      };
    case types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: true
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload)
      };
      
    default:
      return state;
  }
};

export default moviesReducer;
