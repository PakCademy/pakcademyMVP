import React, { Component } from "react";
import BlogCardUI from "../../../Blog/BlogCard/BlogCardUI/BlogCardUI";
import "./ProfileUI.css";
import axios from "axios";
import authHeader from "../../../../services/auth-header";
import BlogCard from "../../../Blog/BlogCard/BlogCardUI/BlogCardUI";
import { Skeleton } from "@material-ui/lab";

class ProfileUI extends Component {
  state = {
    myLatestFavBlogs: null,
    myLatestBlogs: null,
    profilePicture: null,
    description: null,
    username: null,
  };

  componentDidMount() {
    this.setState({
      username: JSON.parse(localStorage.getItem("user")).username,
    });

    console.log("auth header = " + authHeader());
    axios
      .get("http://localhost:8080/get-my-latest-blogs", {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ myLatestBlogs: response.data.articles });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/get-latest-fav-articles", {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response.data.favArticles);
        this.setState({ myLatestFavBlogs: response.data.favArticles });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/get-profile", {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response.data.userProfile);
        this.setState({
          profilePicture: response.data.userProfile.ProfilePhotoSecureId,
          description: response.data.userProfile.PersonalDescription,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  viewMyAllBlogs = () => {
    const url = "blogs/my-blogs";
    this.props.history.push(url);
  };

  viewAllFavBlogs = () => {
    const url = "blogs/my-fav-blogs";
    this.props.history.push(url);
  };

  handleClick = (blogId) => {
    this.props.history.push(`/blog/${blogId}`);
  };

  fileSelectedHandler = (event) => {
    this.setState({
      profilePicture: event.target.files[0],
    });
    const fd = new FormData();
    fd.append("picture", event.target.files[0]);
    axios
      .post("http://localhost:8000/upload-profile-picture", fd, {
        headers: authHeader(),
      })
      .then((response) => {
        this.setState({ profilePicture: response.data.picture });
      });
  };
  render() {
    return (
      <div className="profile">
        <div className="profile__details">
          <div className="profile__details--content">
            <div
              className="profile__details--content-profile-pic"
              style={{ backgroundImage: `url(${this.state.profilePicture})` }}
            >
              <label
                for="upload-image"
                className="profile__details--content-profile-pic-change"
              >
                <h2>Upload New</h2>
              </label>
              <input
                id="upload-image"
                type="file"
                onChange={this.fileSelectedHandler}
              />
            </div>
            <h1 className="profile__details--content-username">
              {this.state.username}
            </h1>
            <div className="profile__details--content-description">
              <div className="profile__details--content-description-header">
                <h3 className="profile__details--content-description-header-heading">
                  Description
                </h3>
                <a
                  href=""
                  className="profile__details--content-description-header-edit"
                >
                  Edit Description
                </a>
              </div>
              <p className="profile__details--content-description-content">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book. Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book.
              </p>
            </div>
          </div>
          <div className="profile__details--boundary"></div>
        </div>
        <div className="profile__activity">
          <div className="profile__activity--blogs">
            <h1 className="profile__activity--blogs-heading">My Blogs</h1>
            <div className="profile__activity--blogs-my-blogs">
              {this.state.myLatestBlogs ? (
                this.state.myLatestBlogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    id={blog._id}
                    title={blog.Title}
                    picture={blog.PictureSecureId}
                    body={blog.Body}
                    postedOn={blog.PostedOn}
                    handleClick={() => this.handleClick(blog._id)}
                  />
                ))
              ) : (
                <React.Fragment>
                  {[...Array(3)].map((element, index) => (
                    <Skeleton
                      variant="rect"
                      height={400}
                      width={300}
                      key={index}
                    />
                  ))}
                </React.Fragment>
              )}
            </div>
            <a
              className="profile__activity--blogs-view"
              onClick={this.viewMyAllBlogs}
            >
              View All
            </a>
          </div>
          <div className="profile__activity--my-favorites">
            <h1 className="profile__activity--blogs-heading">My Favorites</h1>
            <div className="profile__activity--blogs-my-blogs">
              {this.state.myLatestFavBlogs ? (
                this.state.myLatestFavBlogs.map((blog) => (
                  <BlogCard
                    key={blog._id}
                    id={blog._id}
                    title={blog.Title}
                    picture={blog.PictureSecureId}
                    body={blog.Body}
                    postedOn={blog.PostedOn}
                    handleClick={() => this.handleClick(blog._id)}
                  />
                ))
              ) : (
                <React.Fragment>
                  {[...Array(3)].map((element, index) => (
                    <Skeleton
                      variant="rect"
                      height={400}
                      width={300}
                      key={index}
                    />
                  ))}
                </React.Fragment>
              )}
            </div>
            <a
              className="profile__activity--blogs-view"
              onClick={this.viewAllFavBlogs}
            >
              View All
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileUI;
