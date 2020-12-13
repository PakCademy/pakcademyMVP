import React from "react";
import Navbar from "../../../Header/NavBar/Navbar";
import Footer from "../../../Footer/Footer";
import ProfileUI from "../../../User/Profile/ProfileUI/ProfileUI";

const ProfilePage = (props) => {
  return (
    <React.Fragment>
      <Navbar active="profile" />
      <ProfileUI />
      <Footer />
    </React.Fragment>
  );
};

export default ProfilePage;
