import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AdminLayout from "../Layout/AdminLayout";
import DataTable from "../Shared/DataTable";
import CreateMarkterModal from "../Shared/CreateMarkterModal";
import { getUsers, setUser } from "../../store/reducers/usersReducers";
import ShowMsg from "../Shared/ShowMsg";
import axios from "axios";
import siteInfo from "../../../siteInfo";
import { toast } from "react-toastify";
import EditMarkterModal from "../Shared/EditMarkterModal";

const Marketers = () => {
  const { users, error, pending } = useSelector((state) => state.users);
  // const [searchValue, setSearchValue] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const alert = {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  // const handleSearchValue = (e) => {
  //   setSearchValue();
  //   handleUsersSearch();
  // };

  const handleUsersSearch = async (e) => {
    const value = e.target.value;
    try {
      const res = await axios.get(
        `${siteInfo.api}/users/search/${value}`
      );
      res.data == null
        ? dispatch(getUsers(`/users`))
        : dispatch(setUser(res.data));
    } catch (error) {
      toast.error("An error occurred while fetching search results", alert);
    }
  };

  useEffect(() => {
    dispatch(getUsers(`/users`));
  }, []);

  const handleDelete = (data) => {
    axios
      .delete(`${siteInfo.api}/users/${data.id}`)
      .then((res) => {
        if (res.status == 200) {
          const newArray = users.filter((user) => user != data);
          dispatch(setUser(newArray));
          toast.success("User Deleted", alert);
        }
      })
      .catch((error) => {
        toast.error("Something Is Wrong, Try Again Letter", alert);
      });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 120,
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
      field: "phone",
      headerName: "Phone",
      width: 130,
      sortable: false,
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
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      filterable: false,
      headerClassName: state.theme == "DARK" ? "dark" : "dataTableHeader",
      renderCell: ({ row }) => (
        <div>
          {/* <Button variant="text" color="info" onClick={() => handleDelete(id)}>
            <FaTelegramPlane />
          </Button> */}

          <Button onClick={() => setSelectedID(row.id)} variant="text" color="warning">
            {/* <div> */}
              <label htmlFor="edit-marketers-modal" className="cursor-pointer" >
                <FaEdit />
              </label> 
           {/* </div> */}
          </Button>
          <Button
            variant="text"
            color="error"
            onClick={() => handleDelete(row)}
          >
            <FaTrashAlt />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout>
      <section className={` ${state.theme == "DARK" ? 'dark': 'light'}`}>
        <div className={`flex ${state.theme == "DARK" ? 'dark': 'light'} justify-between px-2 items-center py-3  `}>
          <div className="flex">
            <input
              type="search"
              // onChange={handleSearchValue}
              onChange={handleUsersSearch}
              placeholder=" Search marketer "
              className="input input-bordered rounded  w-96 h-10"
            />
            {/* <button
              type="submit"
              onClick={handleUsersSearch}
              className="  px-2 py-0  h-10 border border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 cursor-pointer  rounded-tr-md rounded-br-md "
            >
              {" "}
              Search{" "}
            </button> */}
          </div>

          <div>
            <label
              htmlFor="marketers-modal"
              className=" bg-indigo-500 hover:bg-indigo-600  font-semibold  text-neutral-100  py-2 px-3 rounded-sm"
            >
              {" "}
              Create New Marketer{" "}
            </label>
            {selectedID && <EditMarkterModal id={selectedID} onClose={()=> setSelectedID(null)}> </EditMarkterModal>}
            <CreateMarkterModal> </CreateMarkterModal>
          </div>
        </div>

        {/* Marketer info show in table  */}
        {pending && <ShowMsg>data is loading...</ShowMsg>}
        {error && <ShowMsg color={"yellow"}>{error}</ShowMsg>}
        {users?.length > 0 && (
          <DataTable columns={columns} data={users}></DataTable>
        )}
        {!pending && !error && !users?.length && (
          <ShowMsg>data not found</ShowMsg>
        )}
      </section>
    </AdminLayout>
  );
};

export default Marketers;
