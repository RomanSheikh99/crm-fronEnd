import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "./PrivetRoutes";
import QuarterlyPerform from "../components/Pages/QuarterlyPerform";
import MonthlyPerform from "../components/Pages/MonthlyPerform";
import DailyPerform from "../components/Pages/DailyPerform";
import Marketers from "../components/Pages/Marketers";
import MyFollowUp from "../components/Pages/MyFollowUp";
import AssignLeads from "../components/Pages/AssignLeads";
import FreshLeads from "../components/Pages/FreshLeads";
import AllLeads from "../components/Pages/AllLeads";
import Login from "../components/Pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoute element={<MyFollowUp />} />,
  },
  {
    path: "/dashboard/marketers",
    element: <PrivetRoute element={<Marketers />} />,
  },
  {
    path: "/performench/quarterly",
    element: <PrivetRoute element={<QuarterlyPerform />} />,
  },
  {
    path: "/performench/monthly",
    element: <PrivetRoute element={<MonthlyPerform />} />,
  },
  {
    path: "/performench/daily",
    element: <PrivetRoute element={<DailyPerform />} />,
  },
  {
    path: "/followup-leads",
    element: <PrivetRoute element={<MyFollowUp />} />,
  },
  {
    path: "/assign-leads",
    element: <PrivetRoute element={<AssignLeads />} />,
  },
  {
    path: "/fresh-leads",
    element: <PrivetRoute element={<FreshLeads />} />,
  },
  {
    path: "/all-leads",
    element: <PrivetRoute element={<AllLeads />} />,
  },
  {
    path: "/login",
    element: <Login> </Login>,
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
