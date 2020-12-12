import React, { Component } from "react";
import "./BlogCardByTopicManager.css";
import BlogCard from "../BlogCardUI/BlogCardUI";
import axios from "axios";
import { Skeleton } from "@material-ui/lab";

class BlogCardByTopicManager extends Component {
  state = {
    blogs: null,
  };

  componentDidMount() {
    const topic = this.props.match.params.topic;
    axios
      .get("http://localhost:8000/get-articles-by-topic/" + topic)
      .then((response) => {
        this.setState({ blogs: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="allBlogsByTopic__Container">
        <h1 className="allBlogsByTopic__Container--Heading">
          {this.props.match.params.topic + " Related Blogs"}
        </h1>
        <div className="allBlogsByTopic__Container--Blogs">
          {this.state.blogs ? (
            this.state.blogs.map((blog) => (
              <div className="allBlogsByTopic__Container--Blogs-Blog">
                <BlogCard
                  key={blog._id}
                  id={blog._id}
                  title={blog.Title}
                  picture={blog.PictureSecureId}
                  body={blog.Body}
                  postedOn={blog.PostenOn}
                />
              </div>
            ))
          ) : (
            <React.Fragment>
              {[...Array(8)].map((i) => (
                <div className="allBlogsByTopic__Container--Blogs-Blog">
                  <Skeleton variant="rect" height={400} width={300} key={i} />
                </div>
              ))}
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default BlogCardByTopicManager;
