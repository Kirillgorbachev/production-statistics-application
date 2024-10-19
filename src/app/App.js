import { Navigate, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/authLayout";
import LoginPage from "../pages/loginPage/loginPage";
import OwnerLayout from "../layouts/ownerLayout";
import StatisticsPage from "../pages/statisticsPage/StatisticsPage";
import ProtectedRoute from "../layouts/protectedRoute";
import LogPage from "../pages/logPage/LogPage";
import UserLayout from "../layouts/userLayout";


function App() {
  return (
      <Routes>

          <Route  path="/" element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRole={[1]}> <OwnerLayout /> </ProtectedRoute>}>
              <Route path="/owner/home" element={<StatisticsPage />} />

          </Route>

          <Route element={<ProtectedRoute allowedRole={[2]}> <UserLayout /> </ProtectedRoute>}>
              <Route path="/user/home" element={<LogPage />}/>
          </Route>
         


          <Route index element={<Navigate to="/login" />} />

      </Routes>
  );
}

export default App;
