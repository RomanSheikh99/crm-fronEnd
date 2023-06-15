import React, { useEffect, useState } from "react";
import { FaEdit, FaTelegramPlane, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import DefaultLayout from "../Layout/DefaultLayout";
import { DataGrid } from "@mui/x-data-grid";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";


const AllLeads = () => {
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [hover, setHover] = useState(false);
  const local = siteInfo.api;


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

  const columns  = [
    { field: "leadsNo", headerName: "SL No", width: 120 , sortable: false,  headerClassName: 'dataTableHeader',},
    { field: "company", headerName: "Company", width: 150 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "country", headerName: "Country", width: 150 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "website", headerName: "Website", width: 150 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "category", headerName: "Category", width: 150 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "minor", headerName: "Minor", width: 120 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "follower", headerName: "Follower", width: 120 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "possibility", headerName: "Possibility", width: 100 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "nextFollowUp", headerName: "Next Follow Up", width: 150 , sortable: false, filterable: false, headerClassName: 'dataTableHeader'},
    { field: "createOn", headerName: "Created At", width: 150 , sortable: false, filterable: false, headerClassName: 'dataTableHeader'},
    { field: "phone", headerName: "Phone", width: 130 , sortable: false, headerClassName: 'dataTableHeader'},
    { field: "email", headerName: "Email", width: 150 , sortable: false, headerClassName: 'dataTableHeader'},
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      filterable: false, headerClassName: 'dataTableHeader',
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

  const getRowClassName = (params) => {
    console.log(hover)
    if(state.theme == "DARK"){
      if(params.row.leadsNo % 2 == 0){
        if(hover){
          return "darkHover";
        }else{
          return "dark";
        }
      }else{
        if(hover){
          return "darkLightHover";
        }else{
          return "darkLight";
        }
      }
    }else{
      return "light"
    }
  }


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
        getRowClassName={getRowClassName}
        />
      </div>
    </DefaultLayout>
  );
};

export default AllLeads;

// onMouseEnter and onMouseLeave 