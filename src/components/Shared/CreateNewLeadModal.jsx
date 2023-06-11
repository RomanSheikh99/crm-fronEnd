import React from "react";

const CreateNewLeadModal = () => {
return (
<div>
  <div className="px-2 py-4">
    {/* The button to open modal */}
    <input type="checkbox" id="create_newlead_modal" className="modal-toggle" />
    <div className="modal">
      <div className=" bg-neutral-100 w-4/6 max-w-5xl ">
        <form className="px-10 w-10/12   py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-700 mb-2"> Create New Lead  </h1>
         <section className="  ">
        <div className=" flex  justify-between">
          {/* Left side of form  */}
          <div>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name
            </label>
            <input type="text" name="name"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input type="email" name="email"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>

           <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name
            </label>
            <input type="text" name="name"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input type="email" name="email"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>
            {/* Left side of form end  */}
          </div>
          
              
          {/* Right side of form start  */}
          <div>
          <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name
            </label>
            <input type="text" name="name"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input type="email" name="email"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>
           <div className="mb-4">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Name
            </label>
            <input type="text" name="name"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input type="email" name="email"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>
         </div>
         {/* Right side of form end   */}
         </div>
      

         {/* Text area for  description   */}
         <div className="w-full mx-auto">
          <label className="text-lg font-medium text-gray-700"> Description </label>
         <textarea placeholder=" " className="textarea textarea-bordered textarea-lg w-full mt-2  " ></textarea>
         </div>
         </section>
          <div className="">
            <div className="modal-action">
            <label htmlFor="create_newlead_modal" className="btn btn-md border-none bg-rose-600 hover:bg-rose-700">
            {" "}
            Close
            </label>
            <button type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
            
          </div>
          </div>
        </form>

        
      </div>
    </div>
  </div>
</div>
);
};

export default CreateNewLeadModal;