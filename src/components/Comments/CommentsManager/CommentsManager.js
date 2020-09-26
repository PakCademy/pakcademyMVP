import React, { useEffect, useState } from "react";

function CommentsManager(props) {
  const [commentBoxOpened, setCommentBoxOpened] = useState(false);
  const [commentBoxFocused, setCommentBoxFocused] = useState(false);

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
        setCommentBoxOpened(true);
      } else {
        // If the comment box is already opened, the CommentsManager
        // needs to bring the comment input area into focus so that
        // the user can start typing the comment.
        setCommentBoxFocused(true);
      }
    }
  }, [props.counter]);

  return <div></div>;
}

export default CommentsManager;
