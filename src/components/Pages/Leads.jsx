import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { fetchData } from "../../store/reducers/leadsReducers";
import DataTable from "../Shared/DataTable";
import ShowMsg from "../Shared/ShowMsg";
import LeadsHeader from "../Shared/LeadsHeader";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router";
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ReplyIcon from '@mui/icons-material/Reply';
import { NavLink } from "react-router-dom";
import moment from "moment";

const Leads = () => {
  const { showLeads, leadsError, pending } = useSelector(
    (state) => state.leads
  );
  const { currentUser } = useSelector((state) => state.users);

  const {pathname} = useLocation();
  const api = `/leads${pathname}`;
  const [dltItem, setDltItem] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const [assignItem, setAssignItem] = useState(null);
  const [followUp, setFollowUp] = useState(null);

  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(api));
  }, [pathname]);

  const handleTrashModal = () => {
    setDltItem(null);
  };

  const getColumns = () => {
    const baseColumns =  [
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
        renderCell: ({ row }) => (
          <NavLink to={`/leads/${row.id}`}>
            <h3 className="text-blue-600">{row.company}</h3>
          </NavLink>
        ),
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
        field: "assignToName",
        headerName: "Assign To",
        width: 120,
        sortable: false,
        headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
      },
      {
        field: "followerName",
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
        field: "nextFollowUP",
        headerName: "Next Follow Up",
        width: 150,
        sortable: false,
        filterable: false,
        headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
        valueGetter: (params) => params.row.nextFollowUP && moment(params.row.nextFollowUP).format('D MMM YYYY'),
      },
      {
        field: "createdOn",
        headerName: "Created At",
        width: 150,
        sortable: false,
        filterable: false,
        headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
        valueGetter: (params) => moment(params.row.createdOn).format('D MMM YYYY HH:mm'),
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
           {currentUser?.role != "ADMIN" && <Button
              variant="text"
              color="info"
              onClick={() => setFollowUp(row.id)}
            >
              <label htmlFor="assign-lead-modal" className="cursor-pointer">
              <ReplyIcon />
              </label>
              
            </Button>}
           { currentUser?.role == "ADMIN" && <Button
              variant="text"
              color="info"
              onClick={() => setAssignItem(row.id)}
            >
              <label htmlFor="assign-lead-modal" className="cursor-pointer">
              <AssignmentReturnedIcon />
              </label>
              
            </Button>}
            {currentUser.id == row.followerID || currentUser.role =='ADMIN' && <Button
              onClick={() => setEditItem(row.id)}
              variant="text"
              color="warning"
            >
              <label htmlFor="edit-lead-modal" className="cursor-pointer">
                <EditCalendarIcon />
              </label>
            </Button>}
            {currentUser.id == row.followerID || currentUser.role =='ADMIN' && <Button variant="text" color="error" onClick={() => setDltItem(row)}>
              <label htmlFor="addToTrashModal" className="cursor-pointer">
                <DeleteIcon />
              </label>
            </Button>}
          </div>
        ),
      },
    ] ;

    if (pathname === '/freshLeads') {
      return baseColumns.filter((column) => column.field !== 'nextFollowUp' && column.field !== 'possibility' && column.field !== 'follower');
    } else {
      return [...baseColumns]; 
    }
  };

  const columns = getColumns();


  return (
    <Layout>
      <LeadsHeader
        followUp={followUp}
        setFollowUp={setFollowUp}
        assignItem={assignItem}
        setAssignItem={setAssignItem}
        editItem={editItem}
        setEditItem={setEditItem}
        dltItem={dltItem}
        setDltItem={setDltItem}
        handleTrashModal={handleTrashModal}
        path={api}
      ></LeadsHeader>
     
      <Box>
      {pending && <ShowMsg>data is loading...</ShowMsg>}
      {leadsError && <ShowMsg color={"yellow"}>{leadsError}</ShowMsg>}
      {showLeads?.length > 0 && (
        <DataTable columns={columns} data={showLeads}></DataTable>
      )}
      {!pending && !leadsError && !showLeads?.length && (
        <ShowMsg>data not found</ShowMsg>
      )}
      </Box>
    </Layout>
  );
};

export default Leads;
