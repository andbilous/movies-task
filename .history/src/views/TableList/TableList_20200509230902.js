import React, { useEffect } from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DropzoneDialogComponent from "components/DropzoneDialog";
import TransitionsModal from "../../components/Modal/Modal";
import { fetchMovies, deleteMovie } from "../../redux/movies/movies.actions";

// const styles = {
//   cardCategoryWhite: {
//     "&,& a,& a:hover,& a:focus": {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     "& a,& a:hover,& a:focus": {
//       color: "#FFFFFF"
//     }
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//     "& small": {
//       color: "#777",
//       fontSize: "65%",
//       fontWeight: "400",
//       lineHeight: "1"
//     }
//   }
// };

// const useStyles = makeStyles(styles);

function TableList({ fetchMovies }) {
  useEffect(() => {
    fetchMovies();
  }, []);
  // const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <DropzoneDialogComponent />
            <TransitionsModal />
            <Table tableHeaderColor="primary" />
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
    deleteMovie: id => dispatch(deleteMovie())
    // fetchAirports: () => dispatch(fetchAirports()),
    // addAirportAsync: item => dispatch(addAirportAsync(item)),
    // changeInput: updatedObject => dispatch(changeInput(updatedObject)),
    // deleteAirportAsync: id => dispatch(deleteAirportAsync(id)),
    // updateAirportAsync: updatedAirport =>
    //   dispatch(updateAirportAsync(updatedAirport)),
    // sortAirportFieldAsc: field => dispatch(sortAirportFieldAsc(field)),
    // sortAirportFieldDesc: field => dispatch(sortAirportFieldDesc(field)),
    // findAirportCode: value => dispatch(findAirportCode(value)),
    // findAirportShortName: value => dispatch(findAirportShortName(value)),
    // resetRows: () => dispatch(resetRows())
  })
)(TableList);

export { TableListContainer as TableList };
