import axios from "axios";
import React from "react";
import siteInfo from "../../../siteInfo";
import { fetchData, setLead } from "../../store/reducers/leadsReducers";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import FilterLeadsModal from "./FilterLeadsModal";
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchLeads = ({ path }) => {
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    const value = e.target.value;
    try {
      if (value) {
        const res = await axios.get(`${siteInfo.api + path + "/" + value}`);
        dispatch(setLead(res.data));
      } else {
        dispatch(fetchData(`${path}`));
      }
    } catch (error) {
      toast.error("An error occurred while fetching search results");
    }
  };

  return (
    <div className="flex">
      <input
        type="search"
        onChange={handleSearch}
        placeholder=" Search Leads "
        className="input input-bordered rounded  w-96 h-10"
      />
      <button
        type="submit"
        className="px-2 py-0  h-10 border border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 cursor-pointer  rounded-tr-md rounded-br-md "
      >
        <label
          htmlFor="filter_leads_modal"
        >
          <FilterListIcon />
        </label>
      </button>
      <FilterLeadsModal />
    </div>
  );
};

export default SearchLeads;
