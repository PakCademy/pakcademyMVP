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
