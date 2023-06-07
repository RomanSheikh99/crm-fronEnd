import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { action } from "../store/store";
import siteInfo from "../../siteInfo";

const PrivetRoute = ({ element }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setUser } = action;

  const userId = JSON.parse(localStorage.getItem("crmUserId"));
  const local = siteInfo.api;
  const api = `${local}/user/${userId}`;

  if (userId) {
    useEffect(() => {
      axios
        .get(api)
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }, [state.user.email]);
  }

  return userId ? element : <Navigate to="/login" replace={true} />;
};
export default PrivetRoute;
