import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable({ movies, deleteMovie }) {
  const classes = useStyles();
  const 
  return (
    <div className={classes.tableResponsive}>
      <MaterialTable
        actions={[
          {
            icon: "more",
            tooltip: "Show Details",
            onClick: (event, rowData) => {
              console.log(rowData);
              // deleteMovie(rowData.id);
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
