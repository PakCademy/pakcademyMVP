import React, { useState } from "react";

import BlogUI from "../BlogUI";
import CommentsManager from "../../Comments/CommentsManager";

function BlogManager() {
  const [blogLiked, setBlogLiked] = useState(false);

  const handleBlogLikeToggled = () => {
    alert("Blog Liked");
  };

  const [counter, setCounter] = useState(0);

  const handleCommentBoxOpened = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleCommentBoxOpenedStatusChange = (status) => {
    alert("comment manager responded with status: " + status);
  };

  const [blogConfig, setBlogConfig] = useState({
    header: {
      imageURL:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "ISSB INITIAL PREPARATION TIPS",
      author: "Haysam Tahir",
      createdOn: "09/26/2020",
    },
    body: {
      likeToggled: handleBlogLikeToggled,
      commentBoxOpened: handleCommentBoxOpened,
    },
  });

  return (
    <React.Fragment>
      <BlogUI config={blogConfig} />
      <CommentsManager
        handleCommentBoxOpenedStatusChange={handleCommentBoxOpenedStatusChange}
        counter={counter}
      />
    </React.Fragment>
  );
}

export default BlogManager;
