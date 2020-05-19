import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
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
          <h1 id="transition-modal-title">Movie Details</h1>
          <List className={modalClasses.list}>
            <ListItem>
              <ListItemText primary="ID" secondary={movieDetails.id} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Title" secondary={movieDetails.Title} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Release Year"
                secondary={movieDetails["Release Year"]}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stars" secondary={movieDetails.Stars} />
            </ListItem>
          </List>
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
          actionsColumnIndex: -1,
          defaultSort: "asc"
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
