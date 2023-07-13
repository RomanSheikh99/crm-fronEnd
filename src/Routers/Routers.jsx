import { createBrowserRouter } from "react-router-dom";
import PrivetRoutes from "./PrivetRoutes";
import AdminRoutes from "./AdminRoutes";
import QuarterlyPerform from "../components/Pages/QuarterlyPerform";
import MonthlyPerform from "../components/Pages/MonthlyPerform";
import DailyPerform from "../components/Pages/DailyPerform";
import Marketers from "../components/Pages/Marketers";
import AdminProfile from "../components/Pages/AdminProfile";
import PageNotFound from "../components/Shared/PageNotFound";
import Leads from "../components/Pages/Leads";
import Login from "../components/Pages/Login";
import HomeRoutes from "./HomeRoutes";
import LeadPage from "../components/Pages/LeadPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoutes element={<HomeRoutes />} />,
  },
  // {
  //   path: "/dashboard",
  //   element: <AdminRoutes element={<div>Dashboard</div>} />,
  // },
  {
    path: "/users",
    element: <AdminRoutes  element={<Marketers />} />,
  },
  {
    path: "/trashLeads",
    element: <AdminRoutes  element={<Leads />} />,
  },
  {
    path: "/allLeads",
    element: <PrivetRoutes element={<Leads />} />,
  },
  {
    path: "/freshLeads",
    element: <PrivetRoutes element={<Leads />} />,
  },
  {
    path: "/leads/:id",
    element: <LeadPage></LeadPage>,
  },
  {
    path: "/followUp/:id",
    element: <PrivetRoutes element={<Leads />} />,
  },
  {
    path: "/assignLeads/:id",
    element: <PrivetRoutes element={<Leads />} />,
  },
  {
    path: "/favLeads/:id",
    element: <PrivetRoutes element={<Leads />} />,
  },
  {
    path: "/performench",
    element: <PrivetRoutes element={<QuarterlyPerform />} />,
  },
  {
    path: "profile",
    element: <PrivetRoutes element={<AdminProfile />} />,
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
 
]);

export default router;
