import React from 'react';
import {  NavLink } from 'react-router-dom';
import TitleBar from './TitleBar';

const Header  = () => {
    return (
      <div>
    {/* Titlebar section start here  */}
     <TitleBar data ={'Total Showing Leads :'} />
       

     {/* Search Filter section start here  */}
     <section className='w-full flex justify-between  gap-y-2 mt-3 px-2 bg-slate-200 py-2 font-semibold text-black'>
      <div> 
      <label> Minor:</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Status :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>
     
      <div> 
      <label> Possibility :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Country :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> Category :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> To :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

      <div> 
      <label> From :</label>
       <select className=" select-bordered w-[115px] ml-1 h-10 rounded-sm">
          <option disabled selected> </option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
       </select>
      </div>

       <button  type='submit' className=' border border-blue-400 p-1 text-blue-400 hover:bg-blue-300 hover:text-white hover:border-white' > Apply Filter  </button>
      </section>

       

       {/* Search Filter section end here  */}


         {/* All Leads Navbar  */}
           <section className='w-full '> 
            <div className='w-full  mt-2 bg-neutral-50  mx-auto rounded-sm  py-3 flex justify-between items-center  text-black font-semibold'>
          <div className='text-blue-500 left-0 '> 
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

          <div className='text-green-500'>
              <div>
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
              to={'/filter-leads'}> Filter Leads  </NavLink>  
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
              to={'/favourite-leads'}> Favourite  Leads  </NavLink>  
              <NavLink className={' mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm'} 
              to={'/trash-leads'}> Trash Leads  </NavLink>  
              </div>
              <div className=' flex justify-end '>
              <NavLink className={'  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm mt-2'} to={'/'}> Create New Leads </NavLink> 
              </div>
          </div>
        </div>
        </section>
          {/* All Leads Navbar end here   */}


      </div>
    );
};

export default Header ;