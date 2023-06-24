import { FaCaretDown} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import CreateNewLeadModal from "./CreateNewLeadModal";
import ImportModal from "./ImportModal";


const PerformHeader = () => {
    return (
      <div className='w-full '>
      {/* Navbar section start here  */}
       <Navbar data={' CRM Performanc Report'} />
        

        {/* Quarterly KPI report Navbar start  */}
        <div className='w-full  mt-4 h-8  mx-auto rounded-sm  py-0 flex justify-between text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
              <NavLink className={' mr-2  btn-design hover:text-neutral-100 p-2 px-3 rounded-sm'} to={'/'}> My Followup </NavLink>  
              <NavLink className={'  btn-design hover:text-neutral-100 py-2 px-3 rounded-sm'} to={'/all-leads'}> All Leads </NavLink> 
          </div>
          <div className='text-blue-500'> 
              <NavLink className={' mx-2 btn-design hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/quarterly'}> Quarterly </NavLink>  
              <NavLink className={' mx-2 btn-design hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/monthly'}> Monthly  </NavLink> 
              <NavLink className={' mx-2 btn-design hover:text-neutral-100 py-2 px-3 rounded-sm '} 
              to={'/performench/daily'}> Daily  </NavLink> 
          </div>
          <div className='  flex'>
              <div>
              <label htmlFor="import_modal"  className={' mr-2 btn-design text-green-600 py-2 px-3 rounded-sm'}> Imports </label> 
              <ImportModal/> 
              </div>
              <div>
              <label htmlFor="create_newlead_modal" className={'  btn-design  text-green-600 py-2 px-3 rounded-sm'} > Create New Leads </label> 
            <CreateNewLeadModal/>
              </div>
          </div>
        </div>
      {/* Quarterly KPI report Navbar end  */}

     </div>
    );
};

export default PerformHeader;