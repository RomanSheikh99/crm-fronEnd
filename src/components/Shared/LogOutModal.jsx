import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/reducers/usersReducers";
import { Navigate } from "react-router";

const LogOutModal = () => {

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(setCurrentUser(null));
    localStorage.removeItem("crmUserId");
    Navigate('/login')
  };


  return (
    <div>
      <div className="px-2 py-4">
        <input type="checkbox" id="logout_modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {" "}
              Are you sure you want to logout ?
            </h3>
            <p className="py-4"> </p>
            <div className="modal-action">
              <label
                htmlFor="logout_modal"
                className="btn btn-sm border-none bg-blue-500"
              >
                {" "}
                Cancel{" "}
              </label>
              <button onClick={handleLogOut} className=" btn bg-red-500 hover:bg-red-600 btn-sm border-none">
                {" "}
                Confirm <FaSignOutAlt className="ml-2" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
