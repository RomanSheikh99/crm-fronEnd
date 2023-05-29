import React  from 'react';
import AdminDashboardNavbar from './AdminDashboardNavbar';
import AdminLeftsideNav from './AdminLeftsideNav';
import { Outlet } from 'react-router';

const AdminDashboard = () => {
    return (
        <div>
            <AdminDashboardNavbar> </AdminDashboardNavbar>
            <main className='flex '>
               {/* Left side   */}
               <div className='w-1/5 '> 
                <AdminLeftsideNav> </AdminLeftsideNav>
               </div>
                <div className='w-full bg-neutral-100'> 
                <Outlet> </Outlet>
                </div>
              
            </main>
             
        </div>
    );
};

export default AdminDashboard;