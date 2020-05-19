import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DropzoneDialogComponent from "components/DropzoneDialog";
import AddModal from "../../components/AddModal";
import CircularProgress from "@material-ui/core/CircularProgress";
import { generateId } from "../../utils";
import Alert from "@material-ui/lab/Alert";
import {
  fetchMovies,
  deleteMovie,
  addMovie,
  uploadMovies,
  dismissSuccessAdd,
  dismissSuccessDelete,
  fetchMoviesFailure,
  dismissErrorUpload,
  dismissSuccessUpload
} from "../../redux/movies/movies.actions";

function TableList({
  fetchMovies,
  movies,
  successAdd,
  successDelete,
  successUpload,
  deleteMovie,
  addMovie,
  uploadMovies,
  isLoading,
  dismissSuccessAdd,
  dismissSuccessDelete,
  uploadError,
  fetchMoviesFailure,
  dismissErrorUpload,
  dismissSuccessUpload
}) {
  useEffect(() => {
    fetchMovies();
  }, []);

  const getDataFromFile = data => {
    if (!data.length) {
      fetchMoviesFailure("Incorrect file data");
    } else {
      uploadMovies(data);
    }
  };

  const handleAddMovie = movie => {
    addMovie({ ...movie, id: generateId() });
  };

  const handleDeleteMovie = id => {
    deleteMovie(id);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <DropzoneDialogComponent
          uploadError={uploadError}
          getDataFromFile={getDataFromFile}
          dismissErrorUpload={dismissErrorUpload}
        />
        <Card>
          <CardBody>
            <AddModal movies={movies} addMovie={handleAddMovie} />
            {isLoading && <CircularProgress size="3rem" />}
            {successAdd && (
              <Alert
                onClose={() => {
                  dismissSuccessAdd();
                }}
              >
                Movie was added successfully !
              </Alert>
            )}
            {successDelete && (
              <Alert
                onClose={() => {
                  dismissSuccessDelete();
                }}
              >
                Movie was deleted successfully !
              </Alert>
            )}
            {successUpload && (
              <Alert
                onClose={() => {
                  dismissSuccessUpload();
                }}
              >
                Movies have been uploaded successfully !
              </Alert>
            )}
            <Table
              movies={movies}
              deleteMovie={handleDeleteMovie}
              tableHeaderColor="primary"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

const TableListContainer = connect(
  state => ({
    movies: state.moviesReducer.movies,
    isLoading: state.moviesReducer.isLoading,
    successDelete: state.moviesReducer.successDelete,
    successAdd: state.moviesReducer.successAdd,
    uploadError: state.moviesReducer.uploadError,
    successUpload: state.moviesReducer.successUpload
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: id => dispatch(deleteMovie(id)),
    addMovie: movie => dispatch(addMovie(movie)),
    uploadMovies: data => dispatch(uploadMovies(data)),
    fetchMoviesFailure: error => dispatch(fetchMoviesFailure(error)),
    dismissSuccessAdd: () => dispatch(dismissSuccessAdd()),
    dismissSuccessDelete: () => dispatch(dismissSuccessDelete()),
    dismissErrorUpload: () => dispatch(dismissErrorUpload()),
    dismissSuccessUpload: () => dispatch(dismissSuccessUpload())
  })
)(TableList);

export { TableListContainer as TableList };
