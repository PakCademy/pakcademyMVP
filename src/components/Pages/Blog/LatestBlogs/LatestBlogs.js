import React, { Component } from "react";
import LatestBlogCardManager from "../../../Blog/LatestBlogCard/LatestBlogCardManager/LatestBlogCardManager";
import BlogCardManager from "../../../Blog/BlogCard/BlogCardManager/BlogCardManager";
import Navbar from "../../../Header/NavBar/Navbar";
import Footer from "../../../Footer/Footer";
import "./LatestBlogs.css";

class LatestBlogs extends Component {
  state = {
    blogTopics: ["Initial", "Physical", "ISSB"],
    loading: false,
  };
  render() {
    return (
      <React.Fragment>
        <Navbar active="blogs" />
        <div className="latest-blog-card-manager">
          <LatestBlogCardManager {...this.props} />
        </div>
        {this.state.blogTopics.map((topic) => (
          <div className="blog-card-manager">
            <BlogCardManager key={topic} topic={topic} {...this.props} />
          </div>
        ))}
        <Footer />
      </React.Fragment>
    );
  }
}

export default LatestBlogs;
