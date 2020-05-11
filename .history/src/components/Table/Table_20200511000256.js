import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import DetailsModal from "../DetailsModal";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
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
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));
  return (
    <div className={classes.tableResponsive}>
      {/* <DetailsModal isOpen={detailsOpen} movie={movieDetails} /> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={useStyles.modal}
                open={detailsOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500
                }}
              >
                <Fade in={detailsOpen}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">Movie Details</h2>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        {movieDetails.Format}
                      </Grid>
                      <Grid item xs>
                        {movieDetails.Format}
                      </Grid>
                      <Grid item xs>
                        {movieDetails.Format}
                      </Grid>
                      <Grid item xs>
                        {movieDetails.Format}
                      </Grid>
                    </Grid>
                  </div>
                </Fade>
              </Modal>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

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
