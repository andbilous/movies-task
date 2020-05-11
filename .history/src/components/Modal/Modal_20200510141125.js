import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { InputLabel } from "@material-ui/core";

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

export default function TransitionsModal({ addMovie }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState({
    format: "VHS",
    releaseYear: "2020",
    stars: "James Jackson",
    title: "Movie"
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setMovie({ ...movie, [prop]: event.target.value });
  };

  const handleAddMovie = () => {

  };
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        Add Movie
      </Button>
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
            <h2 id="transition-modal-title">Add Movie</h2>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  error
                  id="format"
                  label="Format"
                  value={movie.format}
                  onChange={handleChange("format")}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  value={movie.title}
                  onChange={handleChange("title")}
                  id="title"
                  label="Title"
                  defaultValue="Title"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  value={movie.releaseYear}
                  onChange={handleChange("releaseYear")}
                  id="release year"
                  label="Release Year"
                  defaultValue="Release Year"
                  helperText=""
                />
              </Grid>
              <Grid item xs>
                <TextField
                  value={movie.stars}
                  onChange={handleChange("stars")}
                  label="Stars"
                  id="stars"
                  defaultValue="Stars"
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "20px" }}
              onClick={hand}
              variant="contained"
              color="secondary"
            >
              Add Movie
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
