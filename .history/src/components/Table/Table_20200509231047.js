import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
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
              console.log( rowData);
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
        data={[
          {
            id: "Mehmet",
            title: "Baran",
            release: 1987,
            format: 63,
            stars: 55
          },
          { name: "Ast", surname: "Baran", birthYear: 1987, birthCity: 63 }
        ]}
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
