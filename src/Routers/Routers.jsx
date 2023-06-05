import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Pages/Register/Login";
import Signup from "../components/Pages/Register/Signup";
import HomePageDashboard from "../components/Pages/HomePageDashboard/HomePageDashboard";
import MyFollowupPerformance from "../components/Pages/HomePageDashboard/MyFollowupPerformance";
import Quarterly from "../components/Pages/HomePageDashboard/Quarterly";
import Monthly from "../components/Pages/HomePageDashboard/Monthly";
import Daily from "../components/Pages/HomePageDashboard/Daily";
import Imports from "../components/Pages/HomePageDashboard/Imports";
import AllLeadsMain from "../components/Pages/All_Leads/AllLeadsMain";
import MyFollowUpAllLeads from "../components/Pages/All_Leads/MyFollowUp";
import AllLeads from "../components/Pages/All_Leads/AllLeads";
import AdminDashboard from "../components/Layout/AdminDashboard/AdminDashboard";
import PrivetRoute from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute element={<HomePageDashboard />} />,
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
  {
    path: "/signup",
    element: <Signup> </Signup>,
  },

  // Quarterly-KPI-Report Main Page
  {
    path: "/homepage-dashboard",
    element: <HomePageDashboard> </HomePageDashboard>,
    children: [
      {
        path: "/homepage-dashboard/my-followup-performance",
        element: <MyFollowupPerformance> </MyFollowupPerformance>,
      },

      {
        path: "/homepage-dashboard/kpi-quarterly",
        element: <Quarterly> </Quarterly>,
      },
      {
        path: "/homepage-dashboard/kpi-monthly",
        element: <Monthly> </Monthly>,
      },
      {
        path: "/homepage-dashboard/kpi-daily",
        element: <Daily> </Daily>,
      },
      {
        path: "/homepage-dashboard/kpi-imports",
        element: <Imports> </Imports>,
      },
    ],
  },
  // // All Leads Home and Total Leads Showing page
  {
    path: "/all-leads",
    element: <AllLeadsMain> </AllLeadsMain>,
    children: [
      {
        path: "/all-leads/my-followup",
        element: <MyFollowUpAllLeads> </MyFollowUpAllLeads>,
      },
      {
        path: "/all-leads/all-leads-data",
        element: <AllLeads> </AllLeads>,
      },
    ],
  },

  // Admin Dashboard Route setup
  {
    path: "/admin-dashboard",
    element: <AdminDashboard> </AdminDashboard>,
    children: [{}],
  },

  {
    path: "*",
    element: (
      <div
        className="text-3xl text-center mt-4
         font-bold text-red-600"
      >
        {" "}
        This routes not found !{" "}
      </div>
    ),
  },
]);

export default router;
