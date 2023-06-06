import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminLeftsideNav = () => {
    return (
        <div className='w-full h-screen bg-slate-700 '>
          <ul className="menu p-4   text-white">
            {/* <!-- Sidebar content here --> */}
            <li className='hover:bg-slate-900 rounded-sm'> <NavLink to='/admin-dashboard/create-user' > Create User  </NavLink> </li>
            <li className='hover:bg-slate-900 rounded-sm mt-1'> <NavLink to ='/admin-dashboard/all-user' > All User     </NavLink> </li>
            <li className='hover:bg-slate-900 rounded-sm mt-1'> <NavLink to="/admin-dashboard/all-leads" > All Leads    </NavLink></li>
            <li className='hover:bg-slate-900 rounded-sm mt-1'> <NavLink to="/admin-dashboard/fresh-leads" > Fresh Leads  </NavLink></li>
          </ul>
        
      </div>
            
    );
};

export default AdminLeftsideNav;