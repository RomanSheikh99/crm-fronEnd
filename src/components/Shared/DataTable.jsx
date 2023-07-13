import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import moment from "moment";

const DataTable = ({ columns, data }) => {
  const state = useSelector((state) => state.app);
  const {pathname} = useLocation()


  const getRowClassName = (params) => {
    if(pathname.includes('followUp')){
      const currentDate = moment().startOf('day'); 
      const nextFollowUpDate = moment(params.row.nextFollowUP).startOf('day');
      if(nextFollowUpDate.isBefore(currentDate)){
        return "Error"
      }
      if(nextFollowUpDate.isSame(currentDate)){
        return "Warning"
      }else{
        if (state.theme == "DARK") {
          if (params.indexRelativeToCurrentPage % 2 == 0) {
            return "darkLight";
          } else {
            return "dark";
          }
        } else {
          if (params.indexRelativeToCurrentPage % 2 == 0) {
            return "light";
          } else {
            return "lightSec";
          }
        }
      }
    }else{
      if (state.theme == "DARK") {
        if (params.indexRelativeToCurrentPage % 2 == 0) {
          return "darkLight";
        } else {
          return "dark";
        }
      } else {
        if (params.indexRelativeToCurrentPage % 2 == 0) {
          return "light";
        } else {
          return "lightSec";
        }
      }
    }
    
  };

  return (
    // <Box sx={{maxWidth: '100%', overflow: 'auto'}}>
      <DataGrid
        columns={columns}
        rows={data}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        pageSizeOptions={[25, 50, 100]}
        getRowClassName={getRowClassName}
        isRowSelectable={(row) => !row.id}
        getRowId={(row) => row.id}
        sx={{
          maxWidth: "max-content",
          margin: "auto",
          border: 'none',
          boxShadow: 8,
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#777",
            color: "#fff",
          },
        }}
      />
    // </Box>
  );
};

export default DataTable;
