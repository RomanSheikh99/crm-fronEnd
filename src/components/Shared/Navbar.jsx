import React from 'react';
import { FaCaretDown, FaCog, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/vivipng 2.png'

const Navbar = ({data}) => {
    return (
        <div>
            {/* Navbar section start here  */}
    <div className='w-full  bg-slate-900 mx-auto rounded-bl-sm rounded-br-sm  px-3 py-2 flex justify-between text-neutral-100'>
        
        <Link to={'/'} className='cursor-pointer p-1'> <img src={Logo} className='w-12 h-10' /> </Link>
          <div className='text-xl p-1'> {data}  </div>
  
       
  
          {/* Profile dropdown start here  */}
          <div className=' flex items-center py-0 my-0 gap-2 h-8'>
          <div className="dropdown dropdown-end ">
               <label tabIndex={1} className=" mx-2 "> <FaCog className='text-xl hover:text-gray-300 cursor-pointer' /> </label>
                  <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36  text-black">
                    <li className=' '> <button className='w-full text-center'> Light <FaSun/> </button> </li>
                    <li className=' '> <button className='w-full text-center'> Dark <FaMoon/> </button> </li>
                  </ul>
              </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" rounded-md p-1 items-center border-none bg-slate-900 hover:bg-slate-700 flex text-neutral-400 hover:text-neutral-200 cursor-pointer"> Roman Sheikh <FaCaretDown/> </label>
              <ul tabIndex={0} className="dropdown-content text-slate-900 font-semibold menu p-2 shadow  h-52 bg-neutral-100 rounded-md ml-1 mt-1 w-52">
               <li><Link to='/user-profile'> View profile</Link></li>
               <li><Link to='/dashboard/marketers'> Dashboard </Link></li>
               <li><Link to='/'> Log out  </Link></li>
            </ul>
           </div>
          </div>
           
           {/* Profile dropdown end here  */}
          </div>
        </div>
    );
};

export default Navbar;