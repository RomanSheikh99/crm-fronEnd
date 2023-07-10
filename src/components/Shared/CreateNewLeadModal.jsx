import axios from "axios";
import React, { useState } from "react";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addLead } from "../../store/reducers/leadsReducers";

const CreateNewLeadModal = () => {
  const dispatch = useDispatch();
  const [pending, setPending] = useState(false);

  const alert = {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const reset = (e) => {
    e.target.description.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.designation.value = "";
    e.target.contactPerson.value = "";
    e.target.category.value = "";
    e.target.country.value = "";
    e.target.website.value = "";
    e.target.company.value = "";
  };

  const handleCreateNewLead = async (event) => {
    event.preventDefault();
    setPending(true);
    const data = {
      description: event.target.description.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      designation: event.target.designation.value,
      contactParson: event.target.contactParson.value,
      category: event.target.category.value,
      country: event.target.country.value,
      website: event.target.website.value,
      company: event.target.company.value,
      minor: "admin",
    };

    await axios
      .post(`${siteInfo.api}/leads`, data)
      .then((res) => {
        toast.success("New Lead Added", alert);
        dispatch(addLead(res.data));
      })
      .catch((error) => {
        toast.error("Something Wrong, Try Again", alert);
      });

    reset(event);
    setPending(false);
  };

  const countries = [
    "Germany" , "Spain", "Austria", "Luxembourg", "Belgium", "Canada", "Denmark", "France","Italy", "Netherlands","Poland", "Sweden", "Switzerland","UK", "Norway", "Finland", "Ireland", "USA (EST)", "USA (CST)"," USA(PDT)",  " USA (CDT)", " Czech Republic", "Greece", "Romania", "Portugal", "Malta", "Bulgaria", "Cyprus", "Russia", "Brazil","Mexico", "Estonia", "Turkey", "Australia"," New Zealand","Singapore", "Malaysia", "Indonesia", "Hungary", "South Africa", "Slovenia", "Others"
  ]

  return (
    <div className=" px-2 py-4">
      <input
        type="checkbox"
        id="create_newlead_modal"
        className="modal-toggle"
      />
      <div className="modal ">
        <div className=" w-4/6 max-w-3xl h-[75vh] overflow-y-scroll">
          <form
            onReset={reset}
            onSubmit={handleCreateNewLead}
            className="px-10 w-10/12   py-10 mx-auto"
          >
            <h1 className="text-3xl font-semibold text-gray-700 mb-2">
              {" "}
              Create New Lead{" "}
            </h1>

            <section className="  ">
              <div className=" flex  justify-between">
                {/* Left side of form  */}
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="text-lg font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="mt-1 block w-72 h-10 border border-gray-300 rounded-md mr-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="text-lg font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      required
                      className="mt-1 block w-72 h-10 border border-gray-300 rounded-md mr-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      Country
                    </label>
                    <select
                      name="country"
                      required
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled selected>
                        Select Country.
                      </option>
                      {countries.map((country, i) => (
                        <option key={i}> {country} </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-lg font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      required
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled selected>
                        Select Category
                      </option>
                      <option> VFX </option>
                      <option> 2D animation </option>
                      <option> Motion Graphics </option>
                      <option> 3D animation/ CGI </option>
                      <option> Individual </option>
                      <option> BP Seller </option>
                      <option> video editing </option>
                      <option> AR/VR </option>
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
                    <input
                      type="text"
                      required
                      name="contactParson"
                      className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-lg font-medium text-gray-700">
                      Designation
                    </label>
                    <input
                      type="text"
                      required
                      name="designation"
                      className="mt-1 block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="text-lg font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="number"
                      required
                      name="phone"
                      className=" block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="text-lg font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      className=" block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                {/* Right side of form end   */}
              </div>

              {/* Text area for  description   */}
              <div className="w-full mx-auto">
                <label className="text-lg font-medium text-gray-700">
                  {" "}
                  Description{" "}
                </label>
                <textarea
                  placeholder=" "
                  name="description"
                  className="textarea textarea-bordered textarea-lg w-full mt-2  "
                ></textarea>
              </div>
            </section>
            <div className="">
              <div className="modal-action">
                <label
                  htmlFor="create_newlead_modal"
                  className="h-10 flex items-center text-white rounded-sm px-6 py-0 border-none bg-rose-600 hover:bg-rose-700"
                >
                  {" "}
                  Close
                </label>
                <button
                  type="submit"
                  disabled={pending}
                  className="  px-6 py-0   rounded-sm h-10 text-white bg-green-500 hover:bg-green-700   "
                >
                  {pending ? "Pending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewLeadModal;
