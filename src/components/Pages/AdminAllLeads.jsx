import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { fetchData } from "../../store/reducers/leadsReducers";
import DataTable from "../Shared/DataTable";
import AdminLayout from "../Layout/AdminLayout";
import ShowMsg from "../Shared/ShowMsg";
import CreateNewLeadModal from "../Shared/CreateNewLeadModal";
import EditLeadModal from "../Shared/EditLeadModal";
import AddToTrashModal from "../Shared/AddToTrashModal";
import SearchLeads from "../Shared/SearchLeads";

const AdminAllLeads = () => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );
  const [dltItem, setDltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("/leads"));
  }, []);


  const handleTrashModal = () => {
    setDltItem(null);
  };

  const columns = [
    {
      field: "leadsNo",
      headerName: "SL No",
      width: 120,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "company",
      headerName: "Company",
      width: 150,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "country",
      headerName: "Country",
      width: 150,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "website",
      headerName: "Website",
      width: 150,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "minor",
      headerName: "Minor",
      width: 120,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "follower",
      headerName: "Follower",
      width: 120,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "possibility",
      headerName: "Possibility",
      width: 100,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "nextFollowUp",
      headerName: "Next Follow Up",
      width: 150,
      sortable: false,
      filterable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "createdOn",
      headerName: "Created At",
      width: 150,
      sortable: false,
      filterable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      sortable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      filterable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
      renderCell: ({ row }) => (
        <div>
          {/* <Button
            variant="text"
            color="info"
            // onClick={() => handleDelete(id)}
          >
            <FaTelegramPlane />
          </Button> */}
          <Button
            onClick={() => setEditItem(row.id)}
            variant="text"
            color="warning"
          >
            {/* <div> */}
            <label htmlFor="edit-lead-modal" className="cursor-pointer">
              <FaEdit />
            </label>
            {/* </div> */}
          </Button>
          <Button variant="text" color="error" onClick={() => setDltItem(row)}>
            <label htmlFor="addToTrashModal" className="cursor-pointer">
              <FaTrashAlt />
            </label>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div className={`${state.theme == "DARK" ? 'dark': 'light'} flex justify-between px-2 items-center py-3  `}>
        <SearchLeads path={'/leads'}></SearchLeads>

        <div>
          <label
            htmlFor="create_newlead_modal"
            className=" bg-indigo-500 hover:bg-indigo-600  font-semibold  text-neutral-100  py-2 px-3 rounded-sm"
          >
            Create New Lead
          </label>

          {editItem && (
            <EditLeadModal id={editItem} onClose={() => setEditItem(null)}>
              {" "}
            </EditLeadModal>
          )}
          {dltItem && (
            <AddToTrashModal
              item={dltItem}
              handleTrashModal={handleTrashModal}
              onClose={() => setDltItem(null)}
            >
              {" "}
            </AddToTrashModal>
          )}
          <CreateNewLeadModal> </CreateNewLeadModal>
        </div>
      </div>
      {pending && <ShowMsg>data is loading...</ShowMsg>}
      {leadsError && <ShowMsg color={"yellow"}>{leadsError}</ShowMsg>}
      {showLeads?.length > 0 && (
        <DataTable columns={columns} data={showLeads}></DataTable>
      )}
      {!pending && !leadsError && !showLeads?.length && (
        <ShowMsg>data not found</ShowMsg>
      )}
    </AdminLayout>
  );
};

export default AdminAllLeads;
