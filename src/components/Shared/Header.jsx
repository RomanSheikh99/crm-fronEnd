import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import CreateNewLeadModal from "./CreateNewLeadModal";
import FilterLeadsModal from "./FilterLeadsModal";
import ImportModal from "./ImportModal";
import { useSelector } from "react-redux";
import SearchLeads from "./SearchLeads";

const Header = () => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );
  const state = useSelector((state) => state.app);
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <div className={`${state.theme == "DARK" ? 'dark': 'light'}`}>
      {/* Navbar section start here  */}
      <Navbar data={`Total Showing Leads : ${showLeads?.length?showLeads.length: '0'} `} />

      {/* All Leads Navbar  */}
      <section className={` w-full ${state.theme == "DARK" ? 'dark': 'light'}`}>
        <div className={`w-full ${state.theme == "DARK" ? 'dark': 'light'}  mt-2  mx-auto rounded-sm  py-3 flex justify-between items-center  text-black font-semibold`}>
          <div className="text-blue-500 left-0  ">
            <NavLink
              className={
                " mr-2  hover:bg-blue-500 hover:text-neutral-100 p-2 px-3 rounded-sm"
              }
              to={"/followup-leads"}
            >
              {" "}
              My Follow-up{" "}
            </NavLink>
            <NavLink
              className={
                "  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm"
              }
              to={"/assign-leads"}
            >
              Assign Leads{" "}
            </NavLink>
            <NavLink
              className={
                "  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm"
              }
              to={"/fresh-leads"}
            >
              {" "}
              Fresh Leads{" "}
            </NavLink>
            <NavLink
              className={
                "  hover:bg-blue-500 hover:text-neutral-100 py-2 px-3 rounded-sm"
              }
              to={"/all-leads"}
            >
              {" "}
              All Leads{" "}
            </NavLink>
          </div>

        {pathname === "/all-leads" && <SearchLeads path={'/leads'}></SearchLeads>}
        {pathname === "/fresh-leads" && <SearchLeads path={'/leads/freshLeads'}></SearchLeads>}

          {/* Filter section and Create Leads  */}
          <div className="flex flex-col">
            <div className="flex whitespace-nowrap justify-center">
              <label
                htmlFor="filter_leads_modal"
                className={
                  " mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm"
                }
              >
                {" "}
                Filter Leads{" "}
              </label>
              <FilterLeadsModal> </FilterLeadsModal>

              <NavLink
                className={
                  " mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm"
                }
                to={"/favourite-leads"}
              >
                {" "}
                Favourite Leads{" "}
              </NavLink>
              {/* <NavLink
                className={
                  " mr-2 hover:bg-green-500 hover:text-neutral-100  py-2 px-3 rounded-sm"
                }
                to={"/trash-leads"}
              >
                {" "}
                Trash Leads{" "}
              </NavLink> */}
            </div>

            <div className=" flex justify-end items-center  ">
              <>
                <label
                  htmlFor="import_modal"
                  className={
                    "  bg-green-500 mr-3 hover:bg-green-700 text-neutral-100 py-2 px-3 rounded-sm mt-2"
                  }
                >
                  {" "}
                  Imports{" "}
                </label>
                <ImportModal />
              </>
              <>
                <label
                  htmlFor="create_newlead_modal"
                  className={
                    "  bg-green-500 hover:bg-green-700 text-neutral-100 py-2 px-2 rounded-sm mt-2"
                  }
                >
                  {" "}
                  Create New Leads{" "}
                </label>
                <CreateNewLeadModal> </CreateNewLeadModal>
              </>
            </div>
          </div>
        </div>
      </section>
      {/* All Leads Navbar end here   */}
    </div>
  );
};

export default Header;
