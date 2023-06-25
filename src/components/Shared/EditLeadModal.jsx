import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import ShowMsg from "./ShowMsg";
import { updateLead } from "../../store/reducers/leadsReducers";

const EditLeadModal = ({ id }) => {
  const dispatch = useDispatch();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    setError(null)
    setLoading(true)
    axios
      .get(`${siteInfo.api}/leads/${id}`)
      .then((res) => {
        setLead(res.data);
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      });
  }, [id]);

  const reset = (e) => {
    e.target.email.value = lead.email;
    e.target.phone.value = lead.phone;
    e.target.designation.value = lead.designation;
    e.target.contactParson.value = lead.contactParson;
    e.target.category.value = lead.category;
    e.target.country.value = lead.country;
    e.target.website.value = lead.website;
    e.target.company.value = lead.company;
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    const newLead = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      designation: e.target.designation.value,
      contactParson: e.target.contactParson.value,
      category: e.target.category.value,
      country: e.target.country.value,
      website: e.target.website.value,
      company: e.target.company.value,
    };

    await axios
      .patch(`${siteInfo.api}/leads/${id}`, newLead)
      .then((res) => {
        toast.success("Lead Edited", alert);
        setLead(res.data);
        dispatch(updateLead(res.data));
      })
      .catch((error) => {
        toast.error("Something Wrong, Try Again", alert);
      });

    reset(e);
    setUpdating(false)
  };

  const countris = [
    "Germany",
    "Spain",
    "Austria",
    "Luxembourg",
    "Belgium",
    "Canada",
    "Denmark",
    "France",
    "Italy",
    "Netherlands",
    "Poland",
    "Sweden",
    "Switzerland",
    "UK",
    "Norway",
    "Finland",
    "Ireland",
    "USA (EST)",
    "USA (CST)",
    " USA(PDT)",
    " USA (CDT)",
    " Czech Republic",
    "Greece",
    "Romania",
    "Portugal",
    "Malta",
    "Bulgaria",
    "Cyprus",
    "Russia",
    "Brazil",
    "Mexico",
    "Estonia",
    "Turkey",
    "Australia",
    " New Zealand",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Hungary",
    "South Africa",
    "Slovenia",
    "Others",
  ];

  return (
    <div className="">
      <input type="checkbox" id="edit-lead-modal" className="modal-toggle" />
      <div className="modal">
        <div className="bg-neutral-100 w-4/6 max-w-3xl h-[75vh] overflow-y-scroll">
          <div className="float-right">
            <label
              htmlFor="edit-lead-modal"
              className="cursor-pointer text-slate-700 text-3xl hover:text-red-500 rounded-md"
            >
              {" "}
              <FaRegTimesCircle />{" "}
            </label>
          </div>
          {/* Create Marketer form start here  */}
          {loading && <ShowMsg>Lead loading...</ShowMsg>}
          {error && <ShowMsg>{error.message}</ShowMsg>}
          {!loading && !error && (
            <form
              onSubmit={handleUpdate}
              onReset={reset}
              className=" w-full mx-auto px-4 py-6 mb-10  items-start  flex flex-col rounded-b-md font-semibold "
            >
              <h2 className="text-2xl font-smeibold mt-2 mb-4">
                Edit Lead Information
              </h2>

              {/* ================================================== */}
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
                        defaultValue={lead?.company}
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
                        defaultValue={lead?.website}
                        className="mt-1 block w-72 h-10 border border-gray-300 rounded-md mr-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="mb-3 flex flex-col">
                      <label className="text-lg font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        name="country"
                        defaultValue={lead?.country}
                        className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                      >
                        <option disabled selected>
                          Select Country.
                        </option>
                        {countris.map((country, i) => (
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
                        defaultValue={lead?.category}
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
                        defaultValue={lead?.contactParson}
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
                        defaultValue={lead?.designation}
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
                        defaultValue={lead?.phone}
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
                        defaultValue={lead?.email}
                        name="email"
                        className=" block w-72 h-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {/* Right side of form end   */}
                </div>

                {/* Text area for  description   */}
              </section>

              {/* ============================================ */}

              <div className="flex  flex-row-reverse items-end  w-full   gap-2  ">
                <div>
                  <input
                    value={updating ? "Updating...": "Update"}
                    disabled={updating}
                    type="submit"
                    className="  bg-sky-600 border-none text-neutral-100 px-4 py-2 rounded-md hover:bg-sky-800 cursor-pointer"
                  />
                </div>
                {/* <div className="modal-action"> */}
                <button
                  type="reset"
                  disabled={updating}
                  className=" bg-green-600 hover:bg-green-700 cursor-pointer  text-neutral-100 px-4  py-2 rounded-md "
                >
                  Reset
                </button>
                {/* </div> */}
              </div>
            </form>
          )}

          {/* Create Marketer form end here  */}
        </div>
      </div>
    </div>
  );
};

export default EditLeadModal;
