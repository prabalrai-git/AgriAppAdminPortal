import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/Layout";

function App() {
  // console.log("123");
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<PublicPa />} /> */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
