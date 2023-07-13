import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import PerformHeader from "../Shared/PerformHeader";

const Dashboard = ({children}) => {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <Layout>
      {/* {currentUser?.role == "ADMIN" && <h1>Admin Dashboard</h1>}
      {currentUser?.role != "ADMIN" && (
        <div>
          <PerformHeader />
          {children}
        </div>
      )} */}
        <div>
          <PerformHeader />
          {children}
        </div>
    </Layout>
  );
};

export default Dashboard;
