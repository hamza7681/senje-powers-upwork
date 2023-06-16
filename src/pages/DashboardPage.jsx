import React from "react";
import Dashboard from "../containers/Dashboard";
import MainNavbar from "../components/Navbar/MainNavbar";

const DashboardPage = () => {
  return (
    <>
      <MainNavbar component={<Dashboard />} name='Dashboard' />
    </>
  );
};

export default DashboardPage;
