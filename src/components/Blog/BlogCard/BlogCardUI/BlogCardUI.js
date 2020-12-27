import React from "react";
import DotList from "../../../UIWidgets/DotList";
import "./BlogCardUI.css";

const blogCard = (props) => (
  <div className="Card">
    <div
      className="Card__Img"
      style={{ backgroundImage: `url(${props.picture})` }}
    ></div>
    <div className="Card__Content">
      <div className="Card__Content--Heading">
        <p>{props.title}</p>
      </div>
      <div className="Card__Content--Info">
        <DotList
          items={[
            props.author
              ? props.author.authorName
                ? props.author.authorName
                : "Muzamil"
              : "Muzamil",
            new Date(props.postedOn).toDateString(),
          ]}
          theme="warm"
        />
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: props.body.substr(0, 180),
        }}
        className="Card__Content--Overview"
      >
        {/*<p>{props.body.substr(0, 180) + "..."}</p>*/}
      </div>
    </div>
    <button onClick={props.handleClick} className="Card__Button">
      <strong>Read full blog</strong>
    </button>
  </div>
);

export default blogCard;
