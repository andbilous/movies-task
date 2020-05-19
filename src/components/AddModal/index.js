import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { InputLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { transformToFirstLetterUppercase } from "../../utils";

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

export default function TransitionsModal({ addMovie, movies }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [failedFields, setFailedFields] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [movie, setMovie] = useState({
    Format: "VHS",
    "Release Year": "",
    Stars: [],
    Title: ""
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isArrayContainsOnlyUniqueValues = array =>
    array.filter((x, i) => array.indexOf(x) === i).length === array.length;

  const validateFields = (prop, value) => {
    if (prop === "Release Year") {
      if (parseInt(value) < 1850 || parseInt(value) > 2020) {
        setFailedFields([...failedFields, "Release Year"]);
      } else {
        setFailedFields(failedFields.filter(item => item !== "Release Year"));
      }
    }
    if (prop === "Title") {
      if (!value) {
        setFailedFields([...failedFields, "Title"]);
      } else {
        setFailedFields(failedFields.filter(item => item !== "Title"));
      }
    }
    if (prop === "Format") {
      if (!value) {
        setFailedFields([...failedFields, "Format"]);
      } else {
        setFailedFields(failedFields.filter(item => item !== "Format"));
      }
    }
    if (prop === "Stars") {
      console.log(value);
      console.log(movie.Stars);

      if (!isArrayContainsOnlyUniqueValues(value)) {
        setFailedFields([...failedFields, "Stars"]);
      } else {
        setFailedFields(failedFields.filter(item => item !== "Stars"));
      }
    }
  };

  const handleChange = prop => event => {
    let updatedMovie = {};
    if (prop === "Stars") {
      const stars = event.target.value.split(",");
      updatedMovie = {
        ...movie,
        ["Stars"]: stars
      };
    } else if (prop === "Title") {
      if (event.target.value) {
        updatedMovie = {
          ...movie,
          [prop]: transformToFirstLetterUppercase(event.target.value)
        };
      }
    } else {
      updatedMovie = { ...movie, [prop]: event.target.value };
    }
    if (
      movies.filter(
        movie =>
          movie.Title === updatedMovie.Title &&
          movie["Release Year"] === updatedMovie["Release Year"]
      ).length
    ) {
      setIsDuplicate(true);
    } else {
      validateFields(prop, updatedMovie[prop]);
      setMovie(updatedMovie);
    }
  };

  const handleAddMovie = () => {
    if (!movie.Stars.length) {
      setFailedFields([...failedFields, "Stars"]);
    }
    if (!movie.Title) {
      setFailedFields([...failedFields, "Title"]);
    }
    if (!movie["Release Year"]) {
      setFailedFields([...failedFields, "Release Year"]);
    }
    if (
      !failedFields.length &&
      movie.Stars.length &&
      movie.Title &&
      movie["Release Year"]
    ) {
      addMovie(movie);
      setMovie({ Format: "VHS", "Release Year": "", Stars: [], Title: "" });
      handleClose();
    }
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
            {isDuplicate && (
              <Alert
                severity="error"
                onClose={() => {
                  setIsDuplicate(false);
                }}
              >
                This movie is already exist !
              </Alert>
            )}
            <Grid container spacing={2}>
              <Grid item xs>
                <InputLabel id="Format">Format</InputLabel>
                <Select
                  labelId="Format"
                  id="Format"
                  value={movie.Format}
                  onChange={event => {
                    setMovie({ ...movie, Format: event.target.value });
                  }}
                >
                  <MenuItem value={"VHS"}>VHS</MenuItem>
                  <MenuItem value={"Blu-Ray"}>Blu-Ray</MenuItem>
                  <MenuItem value={"DVD"}>DVD</MenuItem>
                </Select>
              </Grid>
              <Grid item xs>
                <TextField
                  error={failedFields.includes("Title")}
                  value={movie.Title}
                  onChange={handleChange("Title")}
                  id="Title"
                  label="Title"
                  placeholder="Title"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  type="number"
                  error={failedFields.includes("Release Year")}
                  value={movie.releaseYear}
                  onChange={handleChange("Release Year")}
                  id="Release Year"
                  label="Release Year"
                  placeholder="2020"
                  helperText="Choose year from 1850 to 2020"
                />
              </Grid>
              <Grid item xs>
                <TextField
                  error={failedFields.includes("Stars")}
                  value={movie.Stars ? movie.Stars.join(",") : ""}
                  onChange={handleChange("Stars")}
                  label="Stars"
                  id="Stars"
                  placeholder="Brad Pitt"
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
