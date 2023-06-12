import React from 'react';
import {  FaCog, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/vivipng 2.png'

const AdminDashboardNavbar = () => {
    return (
        <div className='w-full'>
         <div className='w-full bg-slate-900 mx-auto h-16 px-3 py-2 flex justify-between items-center text-neutral-100'>
        
         <Link to={'/'} className='cursor-pointer p-1'> <img src={Logo} className='w-12 h-10' /> </Link>
         <div className='text-xl p-1'> Admin Dashboard  </div>

           <div className='flex items-center  py-0 my-0 gap-2'>
             <div className="dropdown dropdown-end ">
             <label tabIndex={1} className=" mx-2 "> <FaCog className='text-xl hover:text-gray-300 cursor-pointer' /> </label>
                <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36  text-black">
                  <li className=' '> <button className='w-full text-center'> Light <FaSun/> </button> </li>
                  <li className=' '> <button className='w-full text-center'> Dark <FaMoon/> </button> </li>
                </ul>
            </div>
     
           </div>
         </div> 
        </div>
    );
};

export default AdminDashboardNavbar;