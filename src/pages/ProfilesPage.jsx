import React from "react";
import Profiles from "../containers/Profiles";
import MainNavbar from "../components/Navbar/MainNavbar";

const ProfilesPage = () => {
  return <MainNavbar component={<Profiles />} name="Profiles" />;
};

export default ProfilesPage;
