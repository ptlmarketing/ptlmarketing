// src/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./Auth";

function PrivateRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default PrivateRoute;
