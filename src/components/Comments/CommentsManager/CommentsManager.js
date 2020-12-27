import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import CommentUI from "../CommentUI";
import CommentWriter from "../CommentWriter";

import "./style.scss";
import authHeader from "../../../services/auth-header";
import { bool } from "prop-types";

function CommentsManager(props) {
  const [commentBoxOpened, setCommentBoxOpened] = useState(false);
  const [commentBoxFocused, setCommentBoxFocused] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const commentRef = useRef(null);
  const [comments, setComments] = useState([]);

  // This useEffect is to keep track of the clicked status of
  // 'Add a Comment' button in the BlogUI.
  // Whenever the button is clicked in the BlogUI, the action is lifted
  // up to BlogManager that then, increments this counter.
  // As a result of this increment, CommentsManager gets to know that
  // the button has been clicked and it is supposed to open the comment
  // box to enable the user to add a comment on the blog.
  useEffect(() => {
    if (props.counter > 0) {
      if (!commentBoxOpened) {
        setOpenCommentBox(true);
      } else {
        // If the comment box is already opened, the CommentsManager
        // needs to bring the comment input area into focus so that
        // the user can start typing the comment.
        commentRef.current.focus();
      }
    }
  }, [props.counter]);

  const handleCommentChange = (e) => {
    setCommentBody(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    let commentsCopy = [...comments];
    commentsCopy.push({
      text: commentBody,
      userName: "Muzamil",
      userPic: props.userPic,
    });
    setOpenCommentBox(false);

    setCommentBody("");

    setComments([...commentsCopy]);
    // axios
    //   .post(
    //     "https://localhost:8080/comment/add-new",
    //     {
    //       articleId: props.articleId,
    //       text: commentBody,
    //     },
    //     {
    //       headers: authHeader(),
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const [openCommentBox, setOpenCommentBox] = useState(false);

  const handleDeleteComment = (indexEL) => {
    let commentsCopy = [...comments];
    let updatedComments = [];

    commentsCopy.forEach((comment, index) => {
      if (index != indexEL) {
        updatedComments.push(comment);
      }
    });

    setComments([...updatedComments]);
  };

  return (
    <div class="blog__comments">
      <h2 class="heading__secondary">Comments</h2>
      <div class="container__comment-main">
        {openCommentBox ? (
          <CommentWriter
            body={commentBody}
            handleCommentBodyChange={handleCommentChange}
            commentRef={commentRef}
            userPic={props.userPic}
            handleCommentSubmit={handleCommentSubmit}
          />
        ) : (
          ""
        )}
        {comments.map((comment, index) => {
          return (
            <CommentUI
              key={index}
              deleteComment={() => handleDeleteComment(index)}
              commentBody={comment.text}
              userPic={comment.userPic}
              usename={comment.userName}
              reply={() => setOpenCommentBox(true)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentsManager;
