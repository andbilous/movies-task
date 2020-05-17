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
import { generateId } from "../../utils/generateId";
import {
  fetchMovies,
  deleteMovie,
  addMovie,
  uploadMovies
} from "../../redux/movies/movies.actions";
import Alert from "@material-ui/lab/Alert";

function TableList({
  fetchMovies,
  movies,
  deleteMovie,
  addMovie,
  uploadMovies,
  isLoading
}) {
  useEffect(() => {
    fetchMovies();
  }, []);

  const getDataFromFile = data => {
    uploadMovies(data);
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
        <DropzoneDialogComponent getDataFromFile={getDataFromFile} />
        <Card>
          <CardBody>
            <AddModal addMovie={handleAddMovie} />
            <Alert onClose={() => {}}>
              This is a success alert — check it out!
            </Alert>
            {console.log("IsLoading", isLoading)}
            {isLoading && <CircularProgress size="3rem" />}
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
    isLoading: state.moviesReducer.isLoading
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: id => dispatch(deleteMovie(id)),
    addMovie: movie => dispatch(addMovie(movie)),
    uploadMovies: data => dispatch(uploadMovies(data))
  })
)(TableList);

export { TableListContainer as TableList };
