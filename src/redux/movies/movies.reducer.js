import types from "./movies.types";

const initialValues = {
  movies: [],
  isLoading: false,
  successDelete: false
};

const moviesReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case types.UPLOAD_MOVIES_START:
    case types.FETCH_MOVIES_START:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        isLoading: false
      };
    case types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case types.UPLOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: state.movies.concat(payload),
        isLoading: false
      };
    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload)
      };
    case types.ADD_MOVIE:
      if (payload.Title && payload.Format) {
        return {
          ...state,
          movies: state.movies.concat(payload)
        };
      } else return state;

    default:
      return state;
  }
};

export default moviesReducer;
