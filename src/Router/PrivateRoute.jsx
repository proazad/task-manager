import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../Hooks/useUser";
const PrivateRoute = ({ children }) => {
  const [WhoAmI, isLoading] = useUser();
  const location = useLocation();
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
  if (WhoAmI?.email) {
    return children;
  }
  if (!WhoAmI)
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
