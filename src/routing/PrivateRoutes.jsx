import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/errors/NotFound";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} >
        
      </Route>

      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}