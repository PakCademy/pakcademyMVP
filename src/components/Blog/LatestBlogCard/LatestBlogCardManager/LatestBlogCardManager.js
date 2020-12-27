import React, { Component } from "react";
import "./LatestBlogCardManager.css";
import LatestBlogCard from "../LatestBlogCard/LatestBlogCard";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";

class LatestBlogCardManager extends Component {
  state = {
    blogs: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/get-latest-articles")
      .then((response) => {
        console.log(response.data.articles);
        this.setState({ blogs: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick = (blogId) => {
    this.props.history.push(`/blog/${blogId}`);
  };

  render() {
    let latestBlogs = this.state.blogs ? (
      <React.Fragment>
        <div className="Latest__Blogs--Main-Blog">
          <LatestBlogCard
            cardSize="large"
            key={this.state.blogs[0]._id}
            title={this.state.blogs[0].Title}
            author={this.state.blogs[0].Author}
            picture={this.state.blogs[0].PictureSecureId}
            postedOn={this.state.blogs[0].PostedOn}
            handleClick={() => this.handleClick(this.state.blogs[0]._id)}
          />
        </div>
        <div className="Latest__Blogs--Subordinate-Blogs">
          <div className="Latest__Blogs--Subordinate-Blogs-Blog">
            <LatestBlogCard
              cardSize="small"
              key={this.state.blogs[1]._id}
              title={this.state.blogs[1].Title}
              author={this.state.blogs[1].Author}
              picture={this.state.blogs[1].PictureSecureId}
              postedOn={this.state.blogs[0].PostedOn}
              handleClick={() => this.handleClick(this.state.blogs[1]._id)}
            />
          </div>
          <div className="Latest__Blogs--Subordinate-Blogs-Blog">
            <LatestBlogCard
              cardSize="small"
              key={this.state.blogs[2]._id}
              title={this.state.blogs[2].Title}
              author={this.state.blogs[2].Author}
              picture={this.state.blogs[2].PictureSecureId}
              postedOn={this.state.blogs[0].PostedOn}
              handleClick={() => this.handleClick(this.state.blogs[2]._id)}
            />
          </div>
        </div>
      </React.Fragment>
    ) : (
      <>
        <div className="Latest__Blogs--Main-Blog">
          <Skeleton variant="rect" width={865} height={450} />
        </div>
        <div className="Latest__Blogs--Subordinate-Blogs">
          <div className="Latest__Blogs--Subordinate-Blogs-Blog">
            <Skeleton variant="rect" width={465} height={215} />
          </div>
          <div className="Latest__Blogs--Subordinate-Blogs-Blog">
            <Skeleton variant="rect" width={465} height={215} />
          </div>
        </div>
      </>
    );
    return (
      <div className="Latest__Blogs">
        <div className="Latest__Blogs--Main-Heading">
          <p>#LATEST_BLOGS</p>
        </div>
        {latestBlogs}
      </div>
    );
  }
}

export default LatestBlogCardManager;
