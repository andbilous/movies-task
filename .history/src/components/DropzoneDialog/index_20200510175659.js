// import React, { Component } from "react";
// import { DropzoneDialog } from "material-ui-dropzone";
// import Button from "@material-ui/core/Button";

// export default class DropzoneDialogComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//       files: []
//     };
//   }

//   handleClose() {
//     this.setState({
//       open: false
//     });
//   }

//   handleSave(files) {
//     //Saving files to state for further use and closing Modal.
//     this.setState(
//       {
//         files: files,
//         open: false
//       },
//       () => {
//         var reader = new FileReader();
//         reader.onload = () => {
//           // Do whatever you want with the file contents
//           const binaryStr = reader.result;
//           console.log(222);
//           console.log(binaryStr);
//         };
//         reader.readAsArrayBuffer(this.state.files[0].name)
//         // console.log(reader.readAsDataURL(this.state.files[0].name));
//       }
//     );
//   }

//   handleOpen() {
//     this.setState({
//       open: true
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button onClick={this.handleOpen.bind(this)}>Add Image</Button>
//         <DropzoneDialog
//           open={this.state.open}
//           onSave={this.handleSave.bind(this)}
//           acceptedFiles={[".txt"]}
//           showPreviews={true}
//           maxFileSize={5000000}
//           onClose={this.handleClose.bind(this)}
//         />
//       </div>
//     );
//   }
// }
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
