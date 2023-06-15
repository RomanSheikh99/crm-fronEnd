import React, { useEffect, useState } from "react";

const CreateNewLeadModal = () => {
 const [countries,setCountries] = useState([])
 useEffect(() => {
  const FetchCountry = async () => {
    try{
      const response  = await  fetch('../../../country.json');
      const data = await response.json()
       setCountries(data.countries)
    }catch(error){
      console.log('Failed to fetch country data ',error)
    }
  }
  FetchCountry()
 },[]) 

return (
<div>
  <div className="px-2 py-4">
    {/* The button to open modal */}
    <input type="checkbox" id="create_newlead_modal" className="modal-toggle" />
    <div className="modal">
      <div className=" bg-neutral-100 w-4/6 max-w-4xl h-auto ">
        <form className="px-10 w-10/12   py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-700 mb-2"> Create New Lead  </h1>

         <section className="  ">
        <div className=" flex  justify-between">
          {/* Left side of form  */}
          <div>
          <div className="mb-3">
            <label htmlFor="name" className="text-lg font-medium text-gray-700">
              Company 
            </label>
            <input type="text" name="company" required
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-3">
            <label  className="text-lg font-medium text-gray-700">
              Website 
            </label>
            <input type="url" name="website" required
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>

           <div className="mb-3 flex flex-col">
            <label  className="text-lg font-medium text-gray-700">
              Country   
            </label>
            <select name='country ' required className=" select-bordered  border border-gray-300  w-72 ml-1 h-10 rounded-sm">
                <option value={''} disabled selected> </option>
                {countries.map((country,i)=> (<option key={i}> {country}  </option>))}
              
            </select>
           </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">
              Category  
            </label>
            <select name='category' required className=" select-bordered  border border-gray-300  w-72 ml-1 h-10 rounded-sm">
                <option value={''} disabled selected> </option>
                <option value={''}> Online  Store </option>
                <option value={''}> Brand </option>
                <option value={''}> Photographer </option>
                <option value={''}> Agency </option>
                <option value={''}> VFX </option>
                <option value={''}> BP  Seller  </option>
                <option value={''}> BP  Buyer   </option>
            </select>
           </div>
            {/* Left side of form end  */}
          </div>
          
              
          {/* Right side of form start  */}
          <div>
          <div className="mb-3">
            <label className="text-lg font-medium text-gray-700">
              Contact Person
            </label>
            <input type="text" required name="contact-person"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>

          <div className="mb-3">
            <label  className="text-lg font-medium text-gray-700">
              Designation
            </label>
            <input type="text" required name="designation"
              className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>

           <div className="mb-3">
            <label  className="text-lg font-medium text-gray-700">
              Phone  
            </label>
            <input type="number"  required name="phone"
              className=" block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-3">
            <label htmlFor="email"  className="text-lg font-medium text-gray-700">
              Email
            </label>
            <input type="email" required name="email"
              className=" block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
           </div>
         </div>
         {/* Right side of form end   */}
         </div>
      

         {/* Text area for  description   */}
         <div className="w-full mx-auto">
          <label className="text-lg font-medium text-gray-700"> Description </label>
         <textarea placeholder=" "  className="textarea textarea-bordered textarea-lg w-full mt-2  " ></textarea>
         </div>
         </section>
          <div className="">
            <div className="modal-action">
            <label htmlFor="create_newlead_modal" className="h-10 flex items-center text-white rounded-sm px-6 py-0 border-none bg-rose-600 hover:bg-rose-700">
            {" "}
            Close
            </label>
            <button type="submit"
              className="  px-6 py-0   rounded-sm h-10 text-white bg-green-500 hover:bg-green-700   ">
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