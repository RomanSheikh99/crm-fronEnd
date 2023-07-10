
export const Columns = [
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