import React, { useContext } from "react";

import BlogSignatureHeading from "../../../UIWidgets/Typography/BlogSignatureHeading";
import DotList from "../../../UIWidgets/DotList";

import ThemeContext from "../../../../Contexts/ThemeContext";

import "./style.scss";

function BlogHeader(props) {
  const theme = useContext(ThemeContext);
  const currTheme = "warm";

  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${props.config.imageURL})` }}
        className="blog-header blog-header--pixel"
      >
        {props.config.owner ? (
          <>
            <button
              onClick={props.config.deleteArticle}
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
                right: "175px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              htmlFor="coverImage"
            >
              Delete article
            </button>
            <button
              onClick={props.config.editArticle}
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
              Edit article
            </button>
          </>
        ) : (
          ""
        )}

        <div style={{ color: theme[currTheme].color }} className="blog-title">
          <div className="blog-title--heading">
            <BlogSignatureHeading theme={currTheme}>
              {props.config.title}
            </BlogSignatureHeading>
          </div>
          <div className="blog-authored">
            <DotList items={[props.config.author, props.config.createdOn]} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogHeader;
