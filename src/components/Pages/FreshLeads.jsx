import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTelegramPlane, FaTrashAlt } from "react-icons/fa";
import DefaultLayout from "../Layout/DefaultLayout";
import DataTable from "../Shared/DataTable";
import { fetchData } from "../../store/reducers/leadsReducers";
import ShowMsg from "../Shared/ShowMsg";
import EditLeadModal from "../Shared/EditLeadModal";
import AddToTrashModal from "../Shared/AddToTrashModal";
import FollowLeadModal from "../Shared/FollowLeadModal";

const FreshLeads = () => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );

  const [dltItem, setDltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [followItem, setFollowItem] = useState(null);



  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(`/leads/freshLeads`));
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
    // {
    //   field: "follower",
    //   headerName: "Follower",
    //   width: 120,
    //   sortable: false,
    //   headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    // },
    // {
    //   field: "possibility",
    //   headerName: "Possibility",
    //   width: 100,
    //   sortable: false,
    //   headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    // },
    // {
    //   field: "nextFollowUp",
    //   headerName: "Next Follow Up",
    //   width: 150,
    //   sortable: false,
    //   filterable: false,
    //   headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
    // },
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
      renderCell: ({row}) => (
        <div>
         <Button
            onClick={() => setFollowItem(row.id)}
            variant="text"
            color="info"
          >
            <label htmlFor="follow-lead-modal" className="cursor-pointer">
              <FaTelegramPlane />
            </label>
          </Button>
          <Button
            onClick={() => setEditItem(row.id)}
            variant="text"
            color="warning"
          >
            <label htmlFor="edit-lead-modal" className="cursor-pointer">
              <FaEdit />
            </label>
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
    <DefaultLayout>
      {followItem && (
        <FollowLeadModal id={followItem} onClose={() => setFollowItem(null)}>
          {" "}
        </FollowLeadModal>
      )}
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
     {pending && <ShowMsg>data is loading...</ShowMsg>}
    {leadsError && <ShowMsg color={'yellow'}>{leadsError}</ShowMsg>}
    {showLeads?.length > 0 && (
      <DataTable
        columns={columns}
        data={showLeads}
      ></DataTable>
    )}
    {!pending && !leadsError && !showLeads?.length  && (<ShowMsg>data not found</ShowMsg>)}
  </DefaultLayout>
  );
};

export default FreshLeads;
