import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {/* Format: "VHS"
Release Year: "1974"
Stars: "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn"
id: 1
title: "Blazing Saddles" */}
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Movie</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField id="format" label="Format" defaultValue="Format" />
                <TextField
                  id="release year"
                  label="Release Year"
                  defaultValue="Release Year"
                  helperText=""
                />
              </div>
              <div>
                <TextField id="stars" label="Error" defaultValue="Stars" />
                <TextField id="title" defaultValue="Title"  />
              </div>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="secondary"
              >
                Add Movie
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
