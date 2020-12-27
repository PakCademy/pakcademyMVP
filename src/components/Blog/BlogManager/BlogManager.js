import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../Header/NavBar/Navbar";
import authHeader from "../../../services/auth-header";
import BlogUI from "../BlogUI";
import CommentsManager from "../../Comments/CommentsManager";
import LinearProgress from "@material-ui/core/LinearProgress";

function BlogManager(props) {
  const [blogId, setBlogId] = useState(props.match.params.id);
  const [blogLiked, setBlogLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userPic, setUserPic] = useState("");
  const [userId, setUserId] = useState("");

  const handleBlogLikeToggled = () => {
    axios
      .post(
        "http://localhost:8080/like-article",
        {
          articleId: blogId,
        },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Blog Liked");
  };

  const [counter, setCounter] = useState(0);

  const handleCommentBoxOpened = () => {
    let header = authHeader();
    if (header.Authorization) {
      setCounter((prevState) => prevState + 1);
    } else {
      props.history.push("/login");
    }
  };

  const handleCommentBoxOpenedStatusChange = (status) => {
    alert("comment manager responded with status: " + status);
  };

  const editArticle = (blogId) => {
    props.history.push(`/update-blog/${blogId}`);
  };

  const deleteArticle = (blogId) => {
    setLoading(true);
    axios
      .post(
        "http://localhost:8080/delete-article",
        {
          articleId: blogId,
        },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        setLoading(false);
        props.history.push("/latest-blogs");
      })
      .catch((err) => {
        setLoading(false);
        console.log("Something went wrong!");
      });
  };

  const [blogConfig, setBlogConfig] = useState({
    header: {
      imageURL:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "ISSB INITIAL PREPARATION TIPS",
      author: "Haysam Tahir",
      createdOn: "09/26/2020",
      editArticle: () => editArticle("null"),
    },
    body: {
      likeToggled: handleBlogLikeToggled,
      commentBoxOpened: handleCommentBoxOpened,
    },
  });

  const updateBlogConfig = (userId) => {
    axios
      .get("http://localhost:8080/get-article/" + blogId)
      .then((res) => {
        let owner = false;
        if (userId) {
          if (userId === res.data.article.Author.id) owner = true;
        }
        let d = new Date(res.data.article.PostedOn);
        const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

        setBlogConfig({
          // let data = {
          header: {
            owner: owner,
            imageURL: res.data.article.PictureSecureId,
            title: res.data.article.Title,
            author: res.data.article.Author.authorName,
            createdOn: date,
            editArticle: () => editArticle(res.data.article._id),
            deleteArticle: () => deleteArticle(res.data.article._id),
          },
          body: {
            body: res.data.article.Body,
            likeToggled: handleBlogLikeToggled,
            commentBoxOpened: handleCommentBoxOpened,
          },
          // };
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let userId = null;
    let header = authHeader();
    if (header.Authorization) {
      let uer = axios
        .get("http://localhost:8080/get-profile", { headers: header })
        .then((res) => {
          userId = res.data.userId;
          setUserId(userId);
          console.log(res.data, "profile");
          setUserPic(res.data.userProfile.ProfilePhotoSecureId);
          updateBlogConfig(userId);
        })
        .catch((err) => {
          updateBlogConfig(null);
          console.log(err);
        });
    } else {
      updateBlogConfig(null);
    }
    console.log(header);
  }, []);

  return (
    <React.Fragment>
      <Navbar loading={loading} />
      <BlogUI config={blogConfig} />
      <CommentsManager
        userId={userId}
        userPic={userPic}
        articleId={blogId}
        handleCommentBoxOpenedStatusChange={handleCommentBoxOpenedStatusChange}
        counter={counter}
      />
    </React.Fragment>
  );
}

export default BlogManager;
