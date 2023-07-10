import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const HomeRoutes = () => {
  const { currentUser } = useSelector((state) => state.users);
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     setUser(currentUser);
//     console.log(currentUser);
//   }, [user]);
//   console.log(currentUser);
//   console.log(user);

  if (currentUser.id) {
    return currentUser.role == "ADMIN" ? (
      <Navigate to={"/users"} />
    ) : (
      <Navigate to={`/followUp/${currentUser.id}`} />
    );
  }
};

export default HomeRoutes;
