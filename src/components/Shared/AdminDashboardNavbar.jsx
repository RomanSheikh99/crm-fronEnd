import React from 'react';
import { FaCaretDown, FaCog, FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { action } from "../../store/store";


const AdminDashboardNavbar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setDarkTheme, setLightTheme } = action;
    return (
        <div className={`w-full ${state.theme == "DARK" ? 'dark': 'light'}`}>
         <div className={`w-full  mx-auto h-16 px-3 py-2 flex justify-between items-center ${state.theme == "DARK" ? 'dark': 'light'}`}>
        
         <Link to={'/'} className='cursor-pointer p-1'> Skill_CRM </Link>
         <div className='text-xl p-1'> Admin Dashboard  </div>

           <div className='flex items-center py-0 my-0 gap-2'>
             <div className="dropdown dropdown-end ">
             <label tabIndex={1} className=" mx-2 "> <FaCog className='text-xl hover:text-gray-300 cursor-pointer' /> </label>
                <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36  text-black">
                  <li className=' '> 
                  <button onClick={() => dispatch(setLightTheme())} className='w-full text-center'> Light <FaSun/> </button> </li>
                  <li className=' '> 
                  <button onClick={() => dispatch(setDarkTheme())} className='w-full text-center'> Dark <FaMoon/> </button> </li>
                </ul>
            </div>
         {/* Profile dropdown start here  */}
         <div className="dropdown dropdown-end">
            <label tabIndex={0} className={`${state.theme == "DARK" ? 'dark': 'light'} rounded-md p-1 items-center border-none hover:bg-slate-700 flex hover:text-neutral-200 cursor-pointer`}> Roman Sheikh <FaCaretDown/> </label>
              <ul tabIndex={0} className="dropdown-content text-slate-900 font-semibold menu p-2 shadow  h-52 bg-neutral-100 rounded-md ml-1 mt-1 w-52">
                <li><Link to='/'> View profile</Link></li>
                <li><Link to='/'> Your gmail </Link></li>
                <li><Link to='/'> Log out  </Link></li>
              </ul>
          </div>
       {/* Profile dropdown end here  */}
     
           </div>
         </div> 
        </div>
    );
};

export default AdminDashboardNavbar;