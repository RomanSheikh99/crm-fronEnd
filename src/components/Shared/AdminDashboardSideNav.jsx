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
    return (
        <div className='w-full h-screen bg-slate-800 '>
          <ul className="menu p-4   text-white">
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/dashboard/marketers" > Marketers  </NavLink></li>
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/all-leads" > Leads    </NavLink></li> 
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/dashboard/profile" > Profile    </NavLink></li> 
          </ul>
      </div>
            
    );
};

export default AdminDashboardSideNav;
