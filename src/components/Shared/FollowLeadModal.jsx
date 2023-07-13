import React, { useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import ShowMsg from "./ShowMsg";
import { updateLead } from "../../store/reducers/leadsReducers";

const FollowLeadModal = ({ id }) => {
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
    setError(null);
    setLoading(true);
    axios
      .get(`${siteInfo.api}/leads/${id}`)
      .then((res) => {
        setLead(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
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

  const handleFollow = async (e) => {
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
    setUpdating(false);
  };

  return (
    <div className="">
      <input type="checkbox" id="follow-lead-modal" className="modal-toggle" />
      <div className="modal">
        <div className="bg-neutral-100  h-[75vh] overflow-y-scroll">
          <div className="float-right">
            <label
              htmlFor="follow-lead-modal"
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
              onSubmit={handleFollow}
              onReset={reset}
              className=" w-full mx-auto px-4 py-6 mb-10  items-start  flex flex-col rounded-b-md font-semibold "
            >
              <h2 className="text-2xl font-smeibold mt-2 mb-4">
                Edit Lead Information
              </h2>

              {/* ================================================== */}
              <section className=" w-full ">
                <div className=" flex  justify-between">
                  {/* Left side of form  */}
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      status
                    </label>
                    <select
                      name="category"
                      defaultValue={lead?.status}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled >
                        {" "}
                      </option>
                      <option> Gatekeeper </option>
                      <option> Contacted </option>
                      <option> Follow-up </option>
                      <option> New test </option>
                      <option> Closed </option>
                      <option> Email </option>
                      <option> Not available </option>
                      <option> Voice mail </option>
                      <option> Others </option>
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      Possibility
                    </label>
                    <select
                      name="category"
                      defaultValue={lead?.possibility}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled >
                        {" "}
                      </option>
                      <option> High </option>
                      <option> Medium </option>
                      <option> Low </option>
                    </select>
                  </div>

                  {/* Right side of form end   */}
                </div>
                <div className=" flex  justify-between">
                  {/* Left side of form  */}
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      status
                    </label>
                    <select
                      name="category"
                      defaultValue={lead?.status}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled >
                        {" "}
                      </option>
                      <option> Gatekeeper </option>
                      <option> Contacted </option>
                      <option> Follow-up </option>
                      <option> New test </option>
                      <option> Closed </option>
                      <option> Email </option>
                      <option> Not available </option>
                      <option> Voice mail </option>
                      <option> Others </option>
                    </select>
                  </div>
                  <div className="mb-3 flex flex-col">
                    <label className="text-lg font-medium text-gray-700">
                      Possibility
                    </label>
                    <select
                      name="category"
                      defaultValue={lead?.possibility}
                      className=" select-bordered  border border-gray-300  w-72 ml-0 mr-2 h-10 rounded-md"
                    >
                      <option disabled>
                        {" "}
                      </option>
                      <option> High </option>
                      <option> Medium </option>
                      <option> Low </option>
                    </select>
                  </div>

                  {/* Right side of form end   */}
                </div>
                <div className="w-full mx-auto">
                  <label className="text-lg font-medium text-gray-700">
                    {" "}
                    Description{" "}
                  </label>
                  <textarea
                    placeholder=" "
                    name="description"
                    defaultValue={lead?.description}
                    className="textarea textarea-bordered textarea-lg w-full mt-2  "
                  ></textarea>
                </div>

                {/* Text area for  description   */}
              </section>

              {/* ============================================ */}

              <div className="flex  flex-row-reverse items-end  w-full   gap-2  ">
                <div>
                  <input
                    value={updating ? "Updating..." : "Update"}
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

export default FollowLeadModal;
