import React from "react";
import Navbar from "../../../Header/NavBar/Navbar";
import SignupForm from "../../../User/Auth/SignupForm/SignupForm";

const SignupPage = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <SignupForm {...props} />
    </React.Fragment>
  );
};

export default SignupPage;
