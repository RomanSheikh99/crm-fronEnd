import { FaCaretDown} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";


const PerformHeader = () => {
    return (
      <div className='w-full '>
      {/* Navbar section start here  */}
       <Navbar data={' CRM Performanc Report'} />
        

        {/* Quarterly KPI report Navbar start  */}
        <div className='w-full  mt-3   mx-auto rounded-sm  py-3 flex justify-between text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
              <NavLink className={' mr-2  hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm'} to={'/homepage-dashboard/my-followup-performance'}> My Followup </NavLink>  
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads'}> All Leads </NavLink> 
          </div>
          <div className='text-blue-500'> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/quarterly'}> Quarterly </NavLink>  
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/monthly'}> Monthly  </NavLink> 
              <NavLink className={' mx-2 hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/daily'}> Daily  </NavLink> 
          </div>
          <div className='text-green-500'>
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} to={'/homepage-dashboard/kpi-imports'}> Imports </NavLink>  
              <NavLink className={'  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm'} to={'/'}> Create New Leads </NavLink> 
          </div>
        </div>
      {/* Quarterly KPI report Navbar end  */}

     </div>
    );
};

export default PerformHeader;