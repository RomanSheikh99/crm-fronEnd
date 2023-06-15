import { createBrowserRouter } from "react-router-dom";
import PrivetRoutes from './PrivetRoutes'
import QuarterlyPerform from "../components/Pages/QuarterlyPerform";
import MonthlyPerform from "../components/Pages/MonthlyPerform";
import DailyPerform from "../components/Pages/DailyPerform";
import Marketers from "../components/Pages/Marketers";
import MyFollowUp from "../components/Pages/MyFollowUp";
import AssignLeads from "../components/Pages/AssignLeads";
import FreshLeads from "../components/Pages/FreshLeads";
import AllLeads from "../components/Pages/AllLeads";
import Login from "../components/Pages/Login";
import AdminProfile from "../components/Pages/AdminProfile";
import TrashLeads from "../components/Pages/TrashLeads";
import FavouriteLeads from "../components/Pages/FavouriteLeads";
import PageNotFound from "../components/Shared/PageNotFound";
import UserProfile from "../components/Pages/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivetRoutes element={<MyFollowUp />} /> 
  },
  {
    path: "/dashboard/marketers",
    element: <PrivetRoutes element={<Marketers />} /> 
  },
  {
    path: "/dashboard/profile",
    element: <PrivetRoutes element={<AdminProfile />} /> 
  },
  {
    path: "/performench/quarterly",
    element: <PrivetRoutes element={<QuarterlyPerform />} /> 
  },
  {
    path: "/performench/monthly",
    element: <PrivetRoutes element={<MonthlyPerform />} /> 
  },
  {
    path: "/performench/daily",
    element: <PrivetRoutes element={<DailyPerform />} /> 
  },
  {
    path: "/followup-leads",
    element: <PrivetRoutes element={<MyFollowUp />} /> 
  },
  {
    path: "/assign-leads",
    element: <PrivetRoutes element={<AssignLeads />} /> 
  },
  {
    path: "/fresh-leads",
    element: <PrivetRoutes element={<FreshLeads />} /> 
  },
  {
    path: '/trash-leads',
    element: <PrivetRoutes element={<TrashLeads />} /> 
  },
  {
   path: '/favourite-leads',
   element: <PrivetRoutes element={<FavouriteLeads />} /> 
  },
  {
    path: "/all-leads",
    element: <PrivetRoutes element={<AllLeads />} />
  },
  {
    path: "/login",
    element: <Login> </Login>,
  },
   {
     path: '/user-profile',
     element: <UserProfile/>
   },
  {
    path: "*",
    element: <PageNotFound/>,
  },



]);


export default router;