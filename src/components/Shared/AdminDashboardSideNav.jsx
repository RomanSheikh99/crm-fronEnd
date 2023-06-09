import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboardSideNav = () => {
    return (
        <div className='w-full h-screen bg-slate-700 '>
          <ul className="menu p-4   text-white">
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/dashboard/marketers" > Marketers  </NavLink></li>
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/all-leads" > Leads    </NavLink></li> 
            <li className='hover:bg-slate-900 rounded-md mt-1'> <NavLink to="/dashboard/profile" > Profile    </NavLink></li> 
          </ul>
      </div>
            
    );
};

export default AdminDashboardSideNav;