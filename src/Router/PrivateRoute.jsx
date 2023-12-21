import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading && !user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
