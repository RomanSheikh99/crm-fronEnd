import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminLeftsideNav = () => {
    return (
        <div className='w-full h-screen bg-slate-700 '>
          <ul className="menu p-4   text-white">
            {/* <!-- Sidebar content here --> */}
            <li className='hover:bg-slate-900 rounded-md'> <NavLink to="/" > Create User  </NavLink></li>
            <li className='hover:bg-slate-900 rounded-md'> <NavLink to="/" > All User     </NavLink></li>
            <li className='hover:bg-slate-900 rounded-md'> <NavLink to="/" > All Leads    </NavLink></li>
            <li className='hover:bg-slate-900 rounded-md'> <NavLink to="/" > Fresh Leads  </NavLink></li>
          </ul>
        
      </div>
            
    );
};

export default AdminLeftsideNav;