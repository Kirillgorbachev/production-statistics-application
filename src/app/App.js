import { Navigate, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts";
import AuthPage from "../pages/authPage/authPage";
import { OwnerLayout } from "../layouts";
import StatisticsPage from "../pages/statisticsPage/StatisticsPage";
import { ProtectedRoute } from "../layouts";
import LogPage from "../pages/logPage/LogPage";
import { UserLayout } from "../layouts";


function App() {
  return (
      <Routes>



          <Route  path="/" element={<AuthLayout />}>
              <Route path="/login" element={<AuthPage />} />
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
