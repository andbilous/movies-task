import {TableList} from "views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/table",
    name: "Movies",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
