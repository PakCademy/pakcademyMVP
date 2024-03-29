import React, { Component } from "react";
import "./BlogCardManager.css";
import BlogCard from "../BlogCardUI/BlogCardUI";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";

class BlogCardManager extends Component {
  state = {
    blogs: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/get-latest-articles/" + this.props.topic)
      .then((response) => {
        console.log(response.data.articles);
        this.setState({ blogs: response.data.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  viewAllBlogsByTopicHandler = () => {
    const url = "blogs/" + this.props.topic;
    this.props.history.push(url);
  };

  render() {
    return (
      <div className="Blog-List__Container">
        <div className="Blog-List__Container--Header">
          <div className="Blog-List__Container--Header-Heading">
            {this.props.topic + " Related Blogs"}
          </div>
          <a
            onClick={this.viewAllBlogsByTopicHandler}
            className="Blog-List__Container--Header-anchor"
          >
            View All
          </a>
        </div>
        <div className="Blog-List__Container--BlogCards">
          {this.state.blogs ? (
            this.state.blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                id={blog._id}
                title={blog.Title}
                picture={blog.PictureSecureId}
                body={blog.Body}
                postedOn={blog.PostedOn}
              />
            ))
          ) : (
            <React.Fragment>
              {[...Array(4)].map((element, index) => (
                <Skeleton variant="rect" height={400} width={300} key={index} />
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default BlogCardManager;
