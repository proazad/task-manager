import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  if (!user)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
