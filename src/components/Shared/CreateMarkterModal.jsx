import React from 'react';
import {  FaRegTimesCircle } from 'react-icons/fa';

const CreateMarkterModal = () => {
    return (
 <div className=''>
 <input type="checkbox" id="my_modal_6" className="modal-toggle" />
  <div className="modal">
  
   <div className="modal-box">
   <div className='float-right'>
    <label htmlFor="my_modal_6"className='  cursor-pointer text-slate-700 text-3xl hover:text-red-500 rounded-md'> <FaRegTimesCircle/> </label>
    </div>
     {/* Create Marketer form start here  */}
     <form className=" w-full mx-auto px-4 py-6 mb-10  items-start  flex flex-col rounded-b-md font-semibold ">
        <h2 className="text-2xl font-smeibold mt-2 mb-4"> Create New Marketer Account </h2>
        <div className="flex gap-3">
          <h3 className="w-36 "> Your Name  </h3>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              name={"name"}
              className="w-72 py-2 border hover:bg-yellow-100 "
              placeholder=" Marketer name"
              required
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <h3 className="w-36 "> E-Mail Address </h3>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="email"
              name={"email"}
              className="w-72 py-2 border hover:bg-yellow-100 "
              placeholder="  Marketer email"
              required
            />
          </div>
        </div>

        <div className="flex gap-3">
          <h3 className="w-36 ">  Company Name </h3>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="text"
              name={"company-name"}
              className="w-72 py-2 border hover:bg-yellow-100 "
              placeholder="  Company name / optional"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <h3 className="w-36 "> Password  </h3>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="password"
              name={"password"}
              className="w-72 py-2 border hover:bg-yellow-100 "
              placeholder=" Create a strong password"  
            />
          </div>
        </div>
        
        <div className="flex gap-3">
          <h3 className="w-36 "> Confirm Password  </h3>
          <div className="relative mb-3" data-te-input-wrapper-init>
            <input
              type="password"
              name={"confirm-password"}
              className="w-72 py-2 border hover:bg-yellow-100 "
              placeholder=" Confirm password "
            />
          </div>
        </div>

        <div className="flex flex-row-reverse   gap-2  ">
             <div>
               <input
                  value={"Sign up"}
                  type="submit"
                  className="  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800 cursor-pointer"
                />
               </div>
              {/* <div className="modal-action"> */}
                <button  className=" bg-green-600 hover:bg-green-700 cursor-pointer  text-neutral-100 px-4  py-2 rounded-md "> Reset </button>
              {/* </div> */}
          </div>
        </form>

     {/* Create Marketer form end here  */}
     
    </div>
   </div>
  </div>
    );
};

export default CreateMarkterModal;