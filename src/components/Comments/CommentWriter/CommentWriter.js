import React from "react";

import "./style.css";

function CommentWriter(props) {
  return (
    <div
      className="container__comment-main--wrapper comment2Blog"
      type="comment"
      htmlFor="5dbc1e67ba64434af3bbf8a2"
      id="5dbc1e67ba64434af3bbf8a2form"
      replyingto="5dbc1e67ba64434af3bbf8a2"
    >
      <div className="comment">
        <div className="comment__meta">
          <div className="comment__target">
            <div className="comment__target-pixel"></div>
          </div>
          <div className="comment__actions">
            <button
              className="btn btn__primary"
              onClick={props.handleCommentSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="comment__main">
          <div className="comment__main-pixel">
            <span
              className="comment__main-pixel--view"
              // style="background-image:url(./img/actors/hsm__PC.jpg);"
              style={{
                backgroundImage: `url(${props.userPic})`,
              }}
            ></span>
          </div>
          <div className="comment__main-context">
            <div className="comment__main-context--author">
              <p className="py-fnt-s--1p6 py-ink--dark py-mg--btm-p5">
                Haysam Bin Tahir
              </p>
            </div>
            <div className="comment__main-context--content">
              <textarea
                ref={props.commentRef}
                className="comment__add"
                placeholder="Write your comment here..."
                onChange={props.handleCommentBodyChange}
                value={props.body}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentWriter;
