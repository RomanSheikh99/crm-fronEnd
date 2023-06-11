import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import DataTable from "../Shared/DataTable";
import CreateMarkterModal from "../Shared/CreateMarkterModal";

const Marketers = () => {
  const state = useSelector((state) => state);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch("../../../followupData.json");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Failed to fetch data ", error);
      }
    };
    FetchData();
  }, []);



  return (
    <AdminLayout>
      <section>
        <div className="flex justify-between px-2 items-center py-3  ">
          <div className="flex">
            <input
              type="search"
              placeholder=" Search marketer "
              className="input input-bordered rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none  w-96 h-10"
            />
            <button
              type="submit"
              className="  px-2 py-0  h-10 border border-blue-300 hover:bg-blue-300 hover:text-white text-blue-500 cursor-pointer  rounded-tr-md rounded-br-md "
            >
              {" "}
              Search{" "}
            </button>
          </div>

          <div>
            <label
              htmlFor="my_modal_6"
              className=" bg-green-500 hover:bg-green-600  font-semibold  text-neutral-100  py-2 px-3 rounded-sm"
            >
              {" "}
              Create New Marketer{" "}
            </label>
            <CreateMarkterModal> </CreateMarkterModal>
          </div>
        </div>

        {/* Marketer info show in table  */}
        <div className="">
          <DataTable data={userData} />
        </div>
      </section>
    </AdminLayout>
  );
};

export default Marketers;
