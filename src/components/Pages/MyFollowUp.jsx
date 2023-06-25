import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { FaEdit, FaTelegramPlane, FaTrashAlt } from "react-icons/fa";
import DefaultLayout from "../Layout/DefaultLayout";
import DataTable from "../Shared/DataTable";
import { fetchData } from "../../store/reducers/leadsReducers";
import ShowMsg from "../Shared/ShowMsg";

const MyFollowUp = () => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(`/leads/${state.user.id}`));
  }, []);

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
      renderCell: (id) => (
        <div>
          <Button variant="text" color="info" onClick={() => handleDelete(id)}>
            <FaTelegramPlane />
          </Button>
          <Button
            variant="text"
            color="warning"
            onClick={() => handleDelete(id)}
          >
            <FaEdit />
          </Button>
          <Button variant="text" color="error" onClick={() => handleDelete(id)}>
            <FaTrashAlt />
          </Button>
        </div>
      ),
    },
  ];



  return (
    <DefaultLayout>
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

export default MyFollowUp;
