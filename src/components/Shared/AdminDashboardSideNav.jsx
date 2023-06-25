import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminDashboardSideNav = () => {
  const state = useSelector((state) => state.app);

  return (
    <div
      className={`${state.theme == "DARK" ? "dark" : "light"} w-full h-screen`}
    >
      <ul id="activeClass" className="menu p-4">
        <li className="active:bg-Indigo-500 rounded-md mt-1">
          <NavLink  to="/dashboard/marketers"> Marketers </NavLink>
        </li>
        <li className="active:bg-Indigo-500 rounded-md mt-1">
          <NavLink to="/dashboard/allLeads"> All Leads </NavLink>
        </li>
        <li className="active:bg-Indigo-500 rounded-md mt-1">
          <NavLink to="/dashboard/freshLeads"> Fresh Leads </NavLink>
        </li>
        <li className="active:bg-Indigo-500 rounded-md mt-1">
          <NavLink to="/dashboard/trashLeads"> Trash Leads </NavLink>
        </li>
        <li className="active:bg-Indigo-500 rounded-md mt-1">
          <NavLink className="active:bg-Indigo-500"  to="/dashboard/profile"> Profile </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboardSideNav;
