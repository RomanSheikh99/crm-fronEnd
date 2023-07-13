import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import siteInfo from "../../siteInfo";
import { setCurrentUser } from "../store/reducers/usersReducers";
import { useEffect, useState } from "react";

const PrivetRoute = ({ element }) => {
  const dispatch = useDispatch();

  const [isAuthenticate, setIsAuthenticate] = useState(JSON.parse(localStorage.getItem("crmUserId")));
  // const [isAdmin, setIsAdmin] = useState(false);
  

  
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("crmUserId"));
    const local = siteInfo.api;
    const api = `${local}/users/${userId}`;
  
    if (userId) {
      axios
        .get(api)
        .then((res) => {
          dispatch(setCurrentUser(res.data));
          localStorage.setItem("crmUserId", JSON.stringify(res.data.id));
          setIsAuthenticate(res.data.id);
        })
        .catch((error) => {
          localStorage.setItem("crmUserId", JSON.stringify(null));
          setIsAuthenticate(null);
        });
    } else {
      localStorage.setItem("crmUserId", JSON.stringify(null));
      setIsAuthenticate(null);
    }
  }, [isAuthenticate]);

  return isAuthenticate ? element : <Navigate to="/login" replace={true} />;
};
export default PrivetRoute;
