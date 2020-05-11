import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
var fs = require("fs");

export default class DropzoneDialogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState(
      {
        files: files,
        open: false
      },
      () => {
        fetch(this.state.files[0].name)
        .then((r) => r.text())
        .then(text  => {
          console.log(text);
        }) 
        let data = fs.readFileSync(this.state.files[0].name, "utf8");
        console.log(data.toString());
        console.log(this.state.files);
      }
    );
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen.bind(this)}>Add Image</Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={[".txt"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
