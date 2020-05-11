import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { InputLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
    id: Math.floor(Math.random() * 1000),
    Format: "VHS",
    "Release Year": "2020",
    Stars: [],
    Title: "Movie"
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = prop => event => {
    let value = "";
    if (prop === "Stars") {
      setMovie({ ...movie, [prop]: event.target.value.split(",") });
    }

    setMovie({ ...movie, [prop]: event.target.value });
  };

  const handleAddMovie = () => {
    addMovie(movie);
    handleClose();
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
                <InputLabel id="format">Format</InputLabel>
                <Select
                  labelId="format"
                  id="demo-simple-select"
                  value={movie.Format}
                  onChange={handleChange}
                >
                  <MenuItem value={"VHS"}>VHS</MenuItem>
                  <MenuItem value={"Blu-Ray"}>Blu-Ray</MenuItem>
                  <MenuItem value={"DVD"}>DVD</MenuItem>
                </Select>
              </Grid>
              <Grid item xs>
                <TextField
                  error={movie.title}
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
                  type="number"
                  error={movie.releaseYear}
                  value={movie.releaseYear}
                  onChange={handleChange("Release Year")}
                  id="Release Year"
                  label="Release Year"
                  defaultValue="Release Year"
                  helperText=""
                />
              </Grid>
              <Grid item xs>
                <TextField
                  error={movie.stars}
                  value={movie.stars}
                  onChange={handleChange("Stars")}
                  label="Stars"
                  id="Stars"
                  defaultValue="Stars"
                />
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: "20px" }}
              onClick={handleAddMovie}
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
