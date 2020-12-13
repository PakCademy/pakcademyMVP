import React, { Component } from "react";
import "./DailyBlogManager.css";
import DailyBlogUI from "../DailyBlogUI/DailyBlogUI";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";

class DailyBlogManager extends Component {
  state = {
    blogs: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/get-latest-articles")
      .then((response) => {
        console.log("Check");
        this.setState({ blogs: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="daily-blog-manager">
        <div className="daily-blog-manager__heading">
          <h1 className="daily-blog-manager__heading--text">DAILY BLOGS</h1>
          <div className="daily-blog-manager__heading--line"></div>
        </div>
        <div className="daily-blog-manager__blogs">
          {this.state.blogs ? (
            <>
              <DailyBlogUI
                color="#4285F4"
                key={this.state.blogs[0]._id}
                id={this.state.blogs[0]._id}
                title={this.state.blogs[0].Title}
                body={this.state.blogs[0].Body}
                picture={this.state.blogs[0].PictureSecureId}
              />
              <DailyBlogUI
                color="#F44242"
                key={this.state.blogs[1]._id}
                id={this.state.blogs[1]._id}
                title={this.state.blogs[1].Title}
                body={this.state.blogs[1].Body}
                picture={this.state.blogs[1].PictureSecureId}
              />
              <DailyBlogUI
                color="#0F9D58"
                key={this.state.blogs[2]._id}
                id={this.state.blogs[2]._id}
                title={this.state.blogs[2].Title}
                body={this.state.blogs[2].Body}
                picture={this.state.blogs[2].PictureSecureId}
              />
            </>
          ) : (
            <>
              <Skeleton variant="circle" width={350} height={350} />
              <Skeleton variant="circle" width={350} height={350} />
              <Skeleton variant="circle" width={350} height={350} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default DailyBlogManager;
