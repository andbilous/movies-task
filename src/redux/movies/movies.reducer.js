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
    case types.ADD_MOVIE:
      if (payload.id && payload.Title && payload.Format) {
        return {
          ...state,
          movies: [...state.movies, payload]
        };
      } else return state;

    default:
      return state;
  }
};

export default moviesReducer;
