import React from "react";

const Dashboard = React.lazy(() => import("../pages/admin/dashboard"));
const User = React.lazy(() => import("../pages/admin/user"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/user", name: "User", component: User },
];

export default routes;
