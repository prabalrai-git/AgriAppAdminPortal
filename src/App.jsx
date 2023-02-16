import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  // console.log("123");

  const user = localStorage.getItem("name");

  console.log(user, "useruseruseruser");
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PublicPa />} /> */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />

        <Route
          path="*"
          element={
            <ProtectedRoute user={user}>
              <MainLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
