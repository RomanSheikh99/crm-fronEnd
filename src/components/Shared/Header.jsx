import React from 'react';
import {  NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import CreateNewLeadModal from './CreateNewLeadModal';
import FilterLeadsModal from './FilterLeadsModal';

const Header  = () => {
    return (
      <div>
    {/* Navbar section start here  */}
     <Navbar data ={'Total Showing Leads :'} />
       

    


         {/* All Leads Navbar  */}
           <section className='w-full '> 
            <div className='w-full  mt-2 bg-neutral-50  mx-auto rounded-sm  py-3 flex justify-between items-center  text-black font-semibold'>
            <div className='text-blue-500 left-0  '> 
              <NavLink className={' mr-2  hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm'} 
              to={'/followup-leads'}> My Follow-up </NavLink>  
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} 
              to={'/assign-leads'}>Assign Leads </NavLink> 
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} 
              to={'/fresh-leads'}> Fresh Leads </NavLink> 
              <NavLink className={'  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm'} 
              to={'/all-leads'}> All Leads </NavLink> 
          </div>

           <div className='flex'>
           <input type="search" placeholder=" Search " className="input input-bordered rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none  w-80" />
           <button type='submit' className='  px-2 py-2  border border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 cursor-pointer  rounded-tr-md rounded-br-md ' >  Search  </button>
           </div>

             {/* Filter section and Create Leads  */}
             <div className='flex flex-col'>
                  <div className='flex whitespace-nowrap justify-center'>
                  <label htmlFor='filter_leads_modal' className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
                  > Filter Leads  </label> 
                  <FilterLeadsModal> </FilterLeadsModal> 
                  
                   <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
                     to={'/favourite-leads'}> Favourite  Leads  </NavLink>  
                     <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
                     to={'/trash-leads'}> Trash Leads  </NavLink>  
                  </div>
               
                <div className=' flex justify-end '>
                  <label htmlFor='create_newlead_modal' className={'  bg-green-500 mr-3 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm mt-2'} > Imports </label> 
                  <label htmlFor='create_newlead_modal' className={'  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-2 rounded-sm mt-2'} > Create New Leads </label> 
                  <CreateNewLeadModal> </CreateNewLeadModal>
                 </div>
              </div>

            </div>
            </section>
          {/* All Leads Navbar end here   */}


      </div>
    );
};

export default Header ;