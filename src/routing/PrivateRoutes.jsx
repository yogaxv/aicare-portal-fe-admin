import { Route, Routes } from "react-router";
import ContentsWrapper from "../pages/contents/ContentsWrapper";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/errors/NotFound";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/404' element={<NotFound />} />
      <Route path='/contents/*' element={<ContentsWrapper />} />
    </Routes>
  );
}