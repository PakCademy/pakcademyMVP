import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormData from "form-data";

import Navbar from "../../Header/NavBar/Navbar";
import BlogHeaderImage from "../../../Images/blog.jpeg";
import WriterImage from "../../../Images/mz__PC.jpg";

import "./style.css";
import axios from "axios";
import authHeader from "../../../services/auth-header";

const d = new Date();

function BlogWriter(props) {
  const [loading, setLoading] = useState(props.edit ? true : false);
  const [updateState, setUpdateState] = useState(props.edit);
  const [blogId, setBlogId] = useState(props.edit ? props.match.params.id : "");
  // if (blogId) alert(blogId);
  const [authorName, setAuthorName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState(
    `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  );
  const [modules, setModules] = useState({
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", "normal", "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
      ["image", "video", "link"],
    ],
  });

  const handleCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const handleBodyChange = (value) => {
    setBody(value);
  };

  const killTag = (e) => {
    e.parentNode.remove();
  };
  const selectTag = (e) => {
    e.parentNode.classList.toggle("pbc__tag-holder--highlight");
  };

  const manageTag = (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      var maxTags = 5;
      var tagsCount = document.querySelectorAll(".pbc__tag-holder").length;
      if (
        e.target.value != "" &&
        e.target.value.length <= 20 &&
        tagsCount < maxTags
      ) {
        var tagValue = e.target.value;
        var node = document.createElement("SPAN");
        node.classList.add("pbc__tag-holder");
        var tagNode = document.createElement("SPAN");
        tagNode.classList.add("pbc__tag");
        var tagTextNode = document.createTextNode(tagValue);
        tagNode.appendChild(tagTextNode);
        node.appendChild(tagNode);
        var tagKillNode = document.createElement("SPAN");
        tagKillNode.classList.add("pbc__kill");
        var tagKillIcon = document.createTextNode("X");
        tagKillNode.appendChild(tagKillIcon);
        tagKillNode.setAttribute("onclick", "killTag(this)");
        tagKillNode.setAttribute("onmouseover", "selectTag(this)");
        tagKillNode.setAttribute("onmouseout", "selectTag(this)");
        node.appendChild(tagKillNode);
        e.target.parentNode.insertBefore(node, e.target);
        e.target.value = "";
      } else if (tagsCount == maxTags) {
        alert("Max limit of tags reached");
      }
    } else if (e.key == "Backspace") {
      if (e.target.value == "") {
        var tags = document.querySelectorAll(".pbc__tag-holder");
        var tagCount = tags.length;
        if (tagCount > 0) {
          tags[tagCount - 1].remove();
        }
      }
    }
    // document.querySelector(".pbc__tag-generator").addEventListener("keydown", manageTag);
    return;
  };

  const handleUpdateBlog = () => {
    setLoading(true);
    let data = new FormData();
    if (
      document.querySelector("#coverImage").files &&
      document.querySelector("#coverImage").files[0]
    )
      data.append("picture", document.querySelector("#coverImage").files[0]);
    data.append("title", title);
    data.append("topic", topic);
    data.append("body", body);
    data.append("articleId", blogId);

    axios
      .put("http://localhost:8080/edit-article", data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        props.history.push("/blog/" + blogId);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Something went wrong!");
      });
  };

  const handlePublishBlog = () => {
    setLoading(true);
    let data = new FormData();
    data.append("picture", document.querySelector("#coverImage").files[0]);
    data.append("title", title);
    data.append("topic", topic);
    data.append("body", body);

    axios
      .post("http://localhost:8080/add-article", data, {
        headers: authHeader(),
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        props.history.push("/blog/" + res.data.article._id);
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong!");
        console.log(err);
      });
  };

  const updateBlogConfig = (userId) => {
    axios
      .get("http://localhost:8080/get-article/" + blogId)
      .then((res) => {
        let owner = false;
        if (userId) {
          if (userId === res.data.article.Author.id) owner = true;
        }
        let d = new Date();
        const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

        if (owner) {
          setLoading(false);
          setAuthorName(res.data.article.Author.authorName);
          setBody(res.data.article.Body);
          setTitle(res.data.article.Title);
          setTopic(res.data.article.Topic);
          setCoverImage(res.data.article.PictureSecureId);
        } else {
          props.history.push(`/blog/${blogId}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      props.history.push("/login");
    }

    if (props.edit) {
      let userId = null;
      let header = authHeader();
      if (header.Authorization) {
        let uer = axios
          .get("http://localhost:8080/get-profile", { headers: header })
          .then((res) => {
            userId = res.data.userId;
            updateBlogConfig(userId);
          })
          .catch((err) => {
            updateBlogConfig(null);
            console.log(err);
          });
      }
    } else {
      axios
        .get("http://localhost:8080/get-profile", {
          headers: authHeader(),
        })
        .then((response) => {
          console.log(response.data);
          // this.setState({
          //   profilePicture: response.data.userProfile.ProfilePhotoSecureId,
          //   description: response.data.userProfile.PersonalDescription,
          // });
        })
        .catch((error) => {
          console.log(error);
        });
      localStorage.getItem("user")
        ? setAuthorName(JSON.parse(localStorage.getItem("user")).username)
        : setAuthorName("User not logged in");
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar loading={loading} />
      <div id="5dbc1e67ba64434af3bbf8a2" className="blog">
        <div
          className="blog-header blog-header--pixel"
          style={{
            marginBottom: "2.5rem",
            backgroundImage: `url(${coverImage})`,
            position: "relative",
          }}
        >
          <label
            style={{
              background: "#fff",
              padding: "7px 18px",
              fontSize: "16px",
              fontFamily: "Roboto",
              border: "1px solid #4285f4",
              borderRadius: "4px",
              color: "#4285f4",
              fontWeight: "bold",
              position: "absolute",
              top: "50px",
              right: "50px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            htmlFor="coverImage"
          >
            Upload Image
          </label>
          <div className="blog-title">
            <div className="blog-title--heading">
              <h1 className="py-formatted-blog-heading">
                <span className="py-formatted-blog-heading--margin"></span>
                <span className="py-formatted-blog-heading--print py-ink--warm">
                  {title}
                </span>
              </h1>
            </div>
            <div className="blog-authored">
              <ul className="py-dot-list py-ink--warm py-fnt-s--1p4 py-fnt-w--bold">
                <li className="py-dot-list--item py-ink--warm">
                  <span className="blog-authored--author">{authorName}</span>
                </li>
                <li className="py-dot-list--item py-ink--warm">
                  <span className="blog-authored--date">{date}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <input
          id={"coverImage"}
          type={"file"}
          accept={"image/*"}
          onChange={handleCoverImageChange}
          hidden
        />
      </div>
      <div className="py__blorm-container">
        <div className="py__blorm">
          <div className="py__blorm-control">
            <input
              id="title"
              type="text"
              name="title"
              placeholder="My Blog Title"
              minLength="1"
              maxLength="80"
              value={title}
              onChange={handleTitleChange}
            />
            <select value={topic} onChange={handleTopicChange}>
              <option value="">Blog Type</option>
              <option value="ISSB">ISSB</option>
              <option value="Initial">INITIALS</option>
              <option value="Physical">PHYSICAL</option>
              {/*<option value="1">INITIALS</option>*/}
              {/*<option value="1">REGISTRATION</option>*/}
            </select>
            <input type="file" name="picture" placeholder="picture" hidden />
            <div className="py__blorm-tags--container">
              <input
                className="pbc__tag-generator"
                type="text"
                maxLength="20"
                placeholder="Add a Tag"
                onKeyDown={manageTag}
              />
            </div>
          </div>
          <div id="toolbar"></div>
          <div id="editor"></div>
          <ReactQuill
            modules={modules}
            value={body}
            onChange={handleBodyChange}
          />
          {/*<textarea*/}
          {/*  style={{ display: "none" }}*/}
          {/*  name="body"*/}
          {/*  id="blogBody"*/}
          {/*  cols="30"*/}
          {/*  rows="10"*/}
          {/*></textarea>*/}
          <button
            onClick={props.edit ? handleUpdateBlog : handlePublishBlog}
            className="btn btn__hammer"
            id="submit"
          >
            {props.edit ? "Update Blog" : "Publish Blog"}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogWriter;
