import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import DetailsModal from "../DetailsModal";
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
    setOpen(false);
  };
  return (
    <div className={classes.tableResponsive}>
      {/* <DetailsModal isOpen={detailsOpen} movie={movieDetails} /> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Movie Details</h2>
            <Grid container spacing={2}>
              <Grid item xs>
                {movie.Format}
              </Grid>
              <Grid item xs></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs></Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      <MaterialTable
        actions={[
          {
            icon: "more",
            tooltip: "Show Details",
            onClick: (event, rowData) => {
              setMovieDetails(rowData);
              setDetailsOpen(true);
              console.log(2);
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
          { title: "Release Year", field: "Release Year", filtering: false },
          { title: "Format", field: "Format", filtering: false },
          { title: "Stars", field: "Stars" }
        ]}
        data={movies}
      />
    </div>
  );
}
