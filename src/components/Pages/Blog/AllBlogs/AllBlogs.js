import React from "react";
import Navbar from "../../../Header/NavBar/Navbar";
import BlogCardByTopicManager from "../../../Blog/BlogCard/BlogCardByTopicManager/BlogCardByTopicManager";

const AllBlogs = (props) => {
  return (
    <React.Fragment>
      <Navbar active="blogs" />
      <BlogCardByTopicManager {...props} />
    </React.Fragment>
  );
};

export default AllBlogs;
