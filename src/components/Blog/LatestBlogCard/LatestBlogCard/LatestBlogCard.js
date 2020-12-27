import React, { useContext } from "react";
import BlogSignatureHeading from "../../../UIWidgets/Typography/BlogSignatureHeading";
import DotList from "../../../UIWidgets/DotList";
import "./LatestBlogCard.css";

function LatestBlogCard(props) {
  return (
    <div
      className="LatestBlog__Card"
      style={{ backgroundImage: `url(${props.picture})` }}
    >
      <div
        style={{
          width: props.cardSize == "small" ? "63%" : "42.65%",
          height: props.cardSize == "small" ? "47%" : "32%",
        }}
        className="LatestBlog__Card--Info"
      >
        <h3
          className={
            props.cardSize == "small"
              ? "LatestBlog__Card--Info-Heading-small"
              : "LatestBlog__Card--Info-Heading-large"
          }
        >
          {props.title}
        </h3>
        <div className="LatestBlog__Card--Info-Detail">
          <DotList
            className="LatestBlog__Card--Info-Detail-Writer"
            items={[
              props.author.authorName,
              new Date(props.postedOn).toDateString(),
            ]}
            theme="warm"
          />
        </div>
        <div
          onClick={props.handleClick}
          className="LatestBlog__Card--Info-Button"
        >
          Read full blog
        </div>
      </div>
    </div>
  );
}

export default LatestBlogCard;
