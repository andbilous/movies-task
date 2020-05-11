import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable({movies,deleteMovie}) {
  const classes = useStyles();
  // const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <MaterialTable
        actions={[
          {
            icon: "delete",
            tooltip: "Delete Movie",
            onClick: (event, rowData) => {
              console.log(rowData);
            }
          }
        ]}
        options={{
          search: false,
          toolbar: false,
          actionsColumnIndex: -1
        }}
        columns={[
          { title: "ID", field: "id" },
          { title: "Title", field: "title" },
          { title: "Release", field: "release" },
          { title: "Format", field: "format" },
          { title: "Stars", field: "stars" }
        ]}
        data={movies}
      />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
