import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const DataTable = ({ columns, data }) => {
  const state = useSelector((state) => state.app);

  const getRowClassName = (params) => {
    if (state.theme == "DARK") {
      if (params.indexRelativeToCurrentPage % 2 == 0) {
        return "dark";
      } else {
        return "darkLight";
      }
    } else {
      if (params.indexRelativeToCurrentPage % 2 == 0) {
        return "light";
      } else {
        return "lightSec";
      }
    }
  };


  return (
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
        boxShadow: 2,
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#777",
          color: "#fff",
        },
      }}
    />
  );
};

export default DataTable;
