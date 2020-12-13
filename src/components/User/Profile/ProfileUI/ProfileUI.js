import React, { Component } from "react";
import BlogCardUI from "../../../Blog/BlogCard/BlogCardUI/BlogCardUI";
import "./ProfileUI.css";

class ProfileUI extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__details">
          <div className="profile__details--content">
            <div className="profile__details--content-profile-pic"></div>
            <h1 className="profile__details--content-username">
              Muzamil Hussain
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
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
              />
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
              />
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
              />
            </div>
            <a className="profile__activity--blogs-view">View All</a>
          </div>
          <div className="profile__activity--my-favorites">
            <h1 className="profile__activity--blogs-heading">My Favorites</h1>
            <div className="profile__activity--blogs-my-blogs">
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
                size="small"
              />
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
                size="small"
              />
              <BlogCardUI
                body="Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book."
                title="This is blog title"
                picture="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
                size="small"
              />
            </div>
            <a className="profile__activity--blogs-view">View All</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileUI;
