import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DropzoneDialogComponent from "components/DropzoneDialog";
import TransitionsModal from "../../components/Modal/Modal";
import {
  fetchMovies,
  deleteMovie,
  addMovie
} from "../../redux/movies/movies.actions";

function TableList({ fetchMovies, movies, deleteMovie }) {
  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovie = movie => {
    deleteMovie(movie);
  };

  const handleDeleteMovie = id => {
    deleteMovie(id);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <DropzoneDialogComponent />
            <TransitionsModal addMovie={handleAddMovie} />
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
    movies: state.moviesReducer.movies
  }),
  dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    deleteMovie: id => dispatch(deleteMovie(id)),
    addMovie: movie => dispatch(addMovie(deleteMovie))
  })
)(TableList);

export { TableListContainer as TableList };
