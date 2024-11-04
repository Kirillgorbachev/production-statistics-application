import { Navigate } from "react-router-dom";
import { isLoggedIn, userRole } from "../../features/auth/model/AuthSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRole }) => {
    const LoggedIn = useSelector(isLoggedIn);
    const roles = useSelector(userRole);

  if (!LoggedIn) {
    return <Navigate to="/login" />;
  }

  const hasAccess = roles.some(role => allowedRole.includes(role));

  if (!hasAccess) {
    // Если у пользователя нет нужной роли, перенаправляем его, например, на главную страницу
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;