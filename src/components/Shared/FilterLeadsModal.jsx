import axios from "axios";
import React, { useEffect, useState } from "react";
import siteInfo from "../../../siteInfo";
import { useDispatch } from "react-redux";
import { setLead } from "../../store/reducers/leadsReducers";
import { toast } from "react-toastify";

const FilterLeadsModal = ({setFilterModal}) => {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const FetchCountry = async () => {
      try {
        const response = await fetch("../../../country.json");
        const data = await response.json();
        setCountries(data.countries);
      } catch (error) {
        toast.error("Failed to fetch country data");
      }
    };
    FetchCountry();
  }, []);

  const handleFilter = async (e) => {
    e.preventDefault();

    const params = {
      country: e.target.country.value,
      status: e.target.status.value,
      category: e.target.category.value,
      possibility: e.target.possibility.value,
      minor: e.target.minor.value,
    };
    try {
      const res = await axios.get(`${siteInfo.api}/leads/filterAllLeads`, {
        params,
      });
      dispatch(setLead(res.data));
      setFilterModal(null)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="px-2 py-4">
        {/* The button to open modal */}
        <input
          type="checkbox"
          id="filter_leads_modal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className=" w-[700px]  ">
            <form
              onSubmit={handleFilter}
              className="full py-10 px-4 rounded-md     bg-neutral-100 gap-y-2  font-semibold text-black"
            >
              <h1 className="text-2xl py-4 "> Filter Leads </h1>
              <section className="flex justify-between">
                {/* Filter Form Leftside   */}
                <div className=" ">
                  <div className="flex justify-between">
                    <label> Minor: </label>
                    <input
                      name="minor"
                      placeholder=""
                      className="  border border-slate-400  w-56 ml-1 h-10 rounded-sm"
                    />
                  </div>

                  <div className="mt-6 flex justify-between">
                    <label> Possibiliti :</label>
                    <select
                      name="possibility"
                      className=" select-bordered  border border-slate-400  w-56 ml-1 h-10 rounded-sm"
                    >
                      <option disabled>
                        {" "}
                      </option>
                      <option> High </option>
                      <option> Medium </option>
                      <option> Low </option>
                    </select>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <label> Category :</label>
                    <select
                      name="category"
                      className=" select-bordered  border border-slate-400  w-56 ml-1 h-10 rounded-sm"
                    >
                      <option disabled>
                        {""}
                      </option>
                      <option> Online Store </option>
                      <option> Brand </option>
                      <option> Photographer </option>
                      <option> Agency </option>
                      <option> VFX </option>
                      <option> BP Seller </option>
                      <option> BP Buyer </option>
                    </select>
                  </div>
                </div>

                {/* Filter form right side  */}
                <div className="">
                  <div className="flex justify-between">
                    <label> Status :</label>
                    <select
                      name="status"
                      className=" select-bordered w-56 border border-slate-400  ml-1 h-10 rounded-sm"
                    >
                      <option disabled>
                        {" "}
                      </option>
                      <option> Gatekeeper</option>
                      <option> Contacted </option>
                      <option> New Test </option>
                      <option> Closed </option>
                      <option> Email Sent </option>
                      <option> Not Available </option>
                      <option> Voice Mail </option>
                      <option> Others </option>
                    </select>
                  </div>

                  <div className=" flex justify-between mt-6">
                    <label> Country :</label>
                    <select
                      name="country"
                      className=" select-bordered  border border-slate-400  w-56 ml-1 h-10 rounded-sm"
                    >
                      <option value={""} disabled>
                        {" "}
                      </option>
                      {countries.map((country, i) => (
                        <option key={i}> {country} </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              <div className="modal-action  ">
                <label
                  htmlFor="filter_leads_modal"
                  className=" border px-5 py-1 hover:bg-red-500 hover:text-white border-red-400 text-red-600  cursor-pointer  "
                >
                  {" "}
                  Close{" "}
                </label>
                <button
                  type="submit"
                  className=" border border-blue-400 p-1 text-blue-500 hover:bg-blue-400 hover:text-white hover:border-white"
                >
                  {" "}
                  Apply Filter{" "}
                </button>
              </div>
            </form>
            {/* Search Filter section start here  */}

            {/* Search Filter section end here  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLeadsModal;
