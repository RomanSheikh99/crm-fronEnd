import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ element }) => {
    const state = useSelector((state) => state);

    const isAuthenticated = state.user.email;
  
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };
export default PrivetRoute;