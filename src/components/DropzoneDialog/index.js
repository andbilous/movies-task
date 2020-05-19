import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import { convertTXTtoJSON } from "../../utils";
import Alert from "@material-ui/lab/Alert";

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
    this.setState(
      {
        files: files,
        open: false
      },
      () => {
        var reader = new FileReader();
        reader.onload = () => {
          let convertedFileData = convertTXTtoJSON(reader.result).filter(
            item => item.Title
          );
          this.props.getDataFromFile(convertedFileData);
        };
        reader.readAsText(this.state.files[0]);
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
        <Button color="primary" onClick={this.handleOpen.bind(this)}>
          Upload Movies
        </Button>
        {this.props.uploadError && (
          <Alert
            severity="error"
            onClose={() => {
              this.props.dismissErrorUpload();
            }}
          >
            Incorrect File Data
          </Alert>
        )}
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
