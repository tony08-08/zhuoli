import React from "react";
import { Navigate } from "react-router-dom";

const Login = React.lazy(() => import("../views/login"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
