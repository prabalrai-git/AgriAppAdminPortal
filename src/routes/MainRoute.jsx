import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import BaaliByLocation from "../pages/Reports/Baali/BaaliByLocation";
import ProvienceWiseLand from "../pages/Reports/Land/ProvinceWiseLand";

function MainRoute() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="baaliByLocation" element={<BaaliByLocation />} />
      <Route path="provienceLand" element={<ProvienceWiseLand />} />
    </Routes>
  );
}

export default MainRoute;
