import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute: React.FC = () => {
  const token = Cookie.get("token");

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
