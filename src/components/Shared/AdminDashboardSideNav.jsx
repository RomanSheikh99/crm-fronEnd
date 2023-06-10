import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AdminDashboardSideNav = () => {
  const state = useSelector((state) => state);

  return (
    <div
      className={`${state.theme == "DARK" ? "dark" : "light"} w-full h-screen`}
    >
      <ul className="menu p-4">
        <li className="rounded-md">
          <NavLink to="/dashboard/marketers"> Marketers </NavLink>
        </li>
        <li className="rounded-md">
          <NavLink to="/all-leads"> Leads </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboardSideNav;
