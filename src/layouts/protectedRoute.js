import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../Model/AuthSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
    const LoggedIn = useSelector(isLoggedIn);

  if (!LoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;