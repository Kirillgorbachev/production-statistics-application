import { Navigate, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/authLayout";
import LoginPage from "../pages/main/login/loginPage";
import MainLayout from "../layouts/mainLayout";
import MainPage from "../pages/main/MainPage";
import ProtectedRoute from "../layouts/protectedRoute";


function App() {
  return (
      <Routes>

          <Route  path="/" element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route element={<ProtectedRoute> 
            <MainLayout />
          </ProtectedRoute>}>
              <Route path="/statistics" element={<MainPage />} />
          </Route>


          <Route index element={<Navigate to="/login" />} />

      </Routes>
  );
}

export default App;
