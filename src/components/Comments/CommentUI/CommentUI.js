import React from "react";

function CommentUI(props) {
  return (
    <div class="container__comment-main--wrapper">
      <div class="comment">
        <div class="comment__meta">
          <div class="comment__auth-actions">
            <div
              class="comment__auth-actions--act comment__auth-actions--edit py-fnt-s--1p4 py-fnt-w--bold py-ink--silver"
              onclick="editComment(this)"
            >
              <i class="far fa-edit"></i>
            </div>
            <div
              onClick={props.deleteComment}
              class="comment__auth-actions--act comment__auth-actions--delete py-fnt-s--1p4 py-fnt-w--bold py-ink--silver"
            >
              <i class="far fa-trash-alt"></i>
            </div>
          </div>
          <div class="comment__target">
            <div
              class="comment__target-pixel"
              // style="background-image:url(./img/actors/hsm__PC.jpg);"
              // style={{ backgroundImage: `url(${props.userPic})` }}
            ></div>
          </div>
          <div class="comment__actions">
            <ul class="py-dot-list py-ink--light py-fnt-s--1p2">
              <li
                onClick={(e) => {
                  if (e.target.innerText == "Like") {
                    e.target.innerText = "Liked";
                    e.target.color = "red";
                  } else {
                    e.target.innerText = "Like";
                    e.target.style.color = "#4285f4";
                  }
                }}
                class="py-dot-list--item py-ink--light hover--ptr"
              >
                Like
              </li>
              <li
                onClick={props.reply}
                class="py-dot-list--item py-ink--light hover--ptr"
              >
                Reply
              </li>
            </ul>
          </div>
        </div>
        <div class="comment__main">
          <div class="comment__main-pixel">
            <div
              style={{ backgroundImage: `url(${props.userPic})` }}
              class="comment__main-pixel--view"
            ></div>
          </div>
          <div class="comment__main-context">
            <div class="comment__main-context--author">
              <p class="py-fnt-s--1p6 py-ink--dark py-mg--btm-p5">
                {props.username}
              </p>
            </div>
            <div class="comment__main-context--content">
              <p
                contentEditable={props.edit ? true : false}
                class="py-fnt-s--1p4-I py-ink--silver"
              >
                {props.commentBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentUI;
