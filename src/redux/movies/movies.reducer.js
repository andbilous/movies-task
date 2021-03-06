import types from "./movies.types";

const initialValues = {
  movies: [],
  isLoading: false,
  successDelete: false,
  successAdd: false,
  successUpload: false,
  uploadError: ""
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
        isLoading: false,
        uploadError: payload
      };

    case types.UPLOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: state.movies.concat(payload),
        isLoading: false,
        successUpload: true
      };

    case types.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== payload),
        successDelete: true
      };

    case types.ADD_MOVIE:
      if (payload.Title && payload.Format) {
        return {
          ...state,
          movies: state.movies.concat(payload),
          successAdd: true
        };
      } else return state;

    case types.DISMISS_SUCCESS_ADD:
      return {
        ...state,
        successAdd: false
      };

    case types.DISMISS_SUCCESS_DELETE:
      return {
        ...state,
        successDelete: false
      };

    case types.DISMISS_ERROR_UPLOAD:
      return {
        ...state,
        uploadError: ""
      };

    case types.DISMISS_SUCCESS_UPLOAD:
      return {
        ...state,
        successUpload: false
      };
    default:
      return state;
  }
};

export default moviesReducer;
