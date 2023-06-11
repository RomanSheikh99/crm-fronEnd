import React, { useEffect, useState } from "react";
import { FaEdit, FaTelegramPlane, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import DefaultLayout from "../Layout/DefaultLayout";
import { DataGrid } from "@mui/x-data-grid";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customHeader: {
    backgroundColor: '#888',
    color: '#fff',
    fontWeight: 'bold',
  },
});



const AllLeads = () => {
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  const local = siteInfo.api;
  const classes = useStyles();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${local}/leads`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const api = `${local}/leads/${id}`;
    try {
      const response = await axios.delete(api);
      fetchData();
      if (response.status === 200) {
        toast.success("Action completed successfully!", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  const columns = [
    { field: "leadsNo", headerName: "SL No", width: 120 },
    { field: "company", headerName: "Company", width: 150 ,editable: true},
    { field: "country", headerName: "Country", width: 150 },
    { field: "website", headerName: "Website", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "minor", headerName: "Minor", width: 120 },
    { field: "follower", headerName: "Follower", width: 120 },
    { field: "possibility", headerName: "Possibility", width: 100 },
    { field: "nextFollowUp", headerName: "Next Follow Up", width: 150 },
    { field: "createOn", headerName: "Created At", width: 150 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "email", headerName: "Email", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (id) => (
        <div>
          <Button variant="text" color="info" onClick={() => handleDelete(id)}>
            <FaTelegramPlane />
          </Button>
          <Button variant="text" color="warning" onClick={() => handleDelete(id)}>
            <FaEdit />
          </Button>
          <Button variant="text" color="error" onClick={() => handleDelete(id)}>
            <FaTrashAlt />
          </Button>
        </div>
      ),
    },
  ];

  const headerClassName = 'custom-header';
const headerCellClassName = 'custom-header-cell';

  return (
    <DefaultLayout>
      <div>
        <DataGrid 
        columns={columns} 
        rows={data} 
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        pageSizeOptions={[25, 50, 100]}
        headerClassName={classes.customHeader}
        />
      </div>
    </DefaultLayout>
  );
};

export default AllLeads;
