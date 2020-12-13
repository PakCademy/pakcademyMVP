import React from "react";
import "./DailyBlogUI.css";

const DailyBlogUI = (props) => (
  <div className="daily-blog-ui" style={{ border: `1px solid ${props.color}` }}>
    <div
      className="daily-blog-ui__image"
      style={{ backgroundImage: `url(${props.picture})` }}
    >
      <div
        className="daily-blog-ui__image--title"
        style={{ backgroundColor: props.color }}
      >
        <p>{props.title}</p>
      </div>
    </div>
    <div className="daily-blog-ui__body">
      <p className="daily-blog-ui__body--text">
        {props.body.substr(0, 170) + "..."}
      </p>
      <a className="daily-blog-ui__body--link">Read More</a>
    </div>
  </div>
);

export default DailyBlogUI;
