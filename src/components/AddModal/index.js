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
import { transformTitle } from "../../utils/transformTitle";

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
  const [failedFields, setFailedFields] = useState([]);
  const [movie, setMovie] = useState({
    Format: "VHS",
    "Release Year": "",
    Stars: [],
    Title: ""
  });

  const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateFields = (prop, value) => {
    console.log(prop);
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
      if (!movie.Stars.length || movie.Stars.includes(value.trim())) {
        setFailedFields([...failedFields, "Stars"]);
      } else {
        setFailedFields(failedFields.filter(item => item !== "Stars"));
      }
    }
  };

  const handleChange = prop => event => {
    validateFields(prop, event.target.value);
    if (prop === "Stars") {
      setMovie({ ...movie, [prop]: event.target.value.trim().split(",") });
    }
    if (prop === "Title") {
      setMovie({ ...movie, [prop]: transformTitle(event.target.value) });
    } else {
      setMovie({ ...movie, [prop]: event.target.value });
    }
  };

  const handleAddMovie = () => {
    if (!movie.Stars) {
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
      addMovie({ ...movie, id: getRand() });
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
                  value={movie.title}
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
                  value={movie.stars}
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
