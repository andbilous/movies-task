import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const useStyles = makeStyles(styles);

export default function MoviesTable({ movies, deleteMovie }) {
  const classes = useStyles();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const handleCloseModal = () => {
    setDetailsOpen(false);
  };

  const useModalStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));
  const modalClasses = useModalStyles();
  return (
    <div className={classes.tableResponsive}>
      <Modal
        className={modalClasses.modal}
        open={detailsOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div className={modalClasses.paper}>
          <h2 id="transition-modal-title">Movie Details</h2>
          <List className={modalClasses.root}>
            <ListItem></ListItem>
          </List>
          <Grid container spacing={5}>
            <Card>
              <CardBody>
                <Grid item xs>
                  ID :{movieDetails.id}
                </Grid>
                <Grid item xs>
                  {movieDetails.Title}
                </Grid>
                <Grid item xs>
                  {movieDetails.ReleaseYear}
                </Grid>
                <Grid item xs>
                  {movieDetails.Stars}
                </Grid>
              </CardBody>
            </Card>

            {/* <Grid item xs>
              {movieDetails.Format}
            </Grid>
            <Grid item xs>
              {movieDetails.ReleaseYear}
            </Grid>
            <Grid item xs>
              {movieDetails.Stars}
            </Grid>
            <Grid item xs>
              {movieDetails.Title}
            </Grid> */}
          </Grid>
        </div>
      </Modal>

      <MaterialTable
        actions={[
          {
            icon: "more",
            tooltip: "Show Details",
            onClick: (event, rowData) => {
              setMovieDetails(rowData);
              setDetailsOpen(true);
            }
          },
          {
            icon: "delete",
            tooltip: "Delete Movie",
            onClick: (event, rowData) => {
              deleteMovie(rowData.id);
            }
          }
        ]}
        options={{
          filtering: true,
          search: false,
          toolbar: false,
          actionsColumnIndex: -1
        }}
        columns={[
          { title: "ID", field: "id", filtering: false },
          { title: "Title", field: "Title" },
          { title: "Release Year", field: "ReleaseYear", filtering: false },
          { title: "Format", field: "Format", filtering: false },
          { title: "Stars", field: "Stars" }
        ]}
        data={movies}
      />
    </div>
  );
}
