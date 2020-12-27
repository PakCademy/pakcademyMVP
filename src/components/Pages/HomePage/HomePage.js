import React from "react";
import "./HomePage.css";

import Navbar from "../../Header/NavBar/Navbar";
import HeaderImage from "../../Header/HeaderImage/HeaderImage";
import DailyBlogManager from "../../Blog/DailyBlog/DailyBlogManager/DailyBlogManager";
import TestCardManager from "../../Test/TestCard/TestCardManager/TestCardManager";
import Footer from "../../Footer/Footer";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Navbar active="home" />
      <HeaderImage />
      <DailyBlogManager {...props} />
      <TestCardManager {...props} />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
