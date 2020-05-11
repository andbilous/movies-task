import React, { useEffect } from "react";
import { connect } from "react-redux";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DropzoneDialogComponent from "components/DropzoneDialog";
import AddModal from "../../components/AddModal";
import { convertTXTtoJSON } from "../../utils/convertTXTtoJSON";
import {
  fetchMovies,
  deleteMovie,
  addMovie
} from "../../redux/movies/movies.actions";

function TableList({ fetchMovies, movies, deleteMovie, addMovie }) {
  useEffect(() => {
    fetchMovies();
  }, []);

  const getDataFromFile = data => {
    let datafromField = convertTXTtoJSON(data);
    datafromField.forEach(item => {
      addMovie(Object.assign(item, { id: Math.floor(Math.random() * 1000) }));
    });

    // let dataToEdit = JSON.stringify(data);
    // console.log(dataToEdit);
  };

  const handleAddMovie = movie => {
    addMovie(movie);
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
    addMovie: movie => dispatch(addMovie(movie))
  })
)(TableList);

export { TableListContainer as TableList };
