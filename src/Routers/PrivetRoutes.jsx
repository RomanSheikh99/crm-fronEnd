import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { action } from "../store/store";

const PrivetRoute = ({ element }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { setUser } = action;
  // const [logedUser, setLogedUser] =

  const userId = JSON.parse(localStorage.getItem("crmUserId"));
  const api = `http://localhost:4000/api/user/${userId}`;

  if (userId) {
    useEffect(() => {
      axios
        .get(api)
        .then((res) => {
          console.log(res.data);
          dispatch(setUser(res.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }, [state.user.email]);
  }

  // const isAuthenticated = userId;

  return userId ? element : <Navigate to="/login" replace={true} />;
};
export default PrivetRoute;
