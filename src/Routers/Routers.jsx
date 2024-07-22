import { Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomerRoute from "./CustomerRoute";

export default function Routers() {
  return (
    <Routes>
      <Route path="/admin/restaurants/*" element={<AdminRoute />}></Route>
      <Route path="/*" element={<CustomerRoute />}></Route>
    </Routes>
  );
}
Routers.displayName = "Routers";
