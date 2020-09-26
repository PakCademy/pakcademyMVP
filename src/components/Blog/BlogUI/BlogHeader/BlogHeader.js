import React, { useContext } from "react";

import DotList from "../../../UIWidgets/DotList";

import ThemeContext from "../../../../Contexts/ThemeContext";

import "./style.scss";

function BlogHeader(props) {
  const theme = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div
        style={{ backgroundImage: `url(${props.config.imageURL})` }}
        className="blog-header blog-header--pixel"
      >
        <div style={{ color: theme["warm"].color }} className="blog-title">
          <div className="blog-title--heading">
            <h1 className="py-formatted-blog-heading">
              <span className="py-formatted-blog-heading--margin"></span>
              <span className="py-formatted-blog-heading--print py-ink--warm">
                {props.config.title}
              </span>
            </h1>
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
