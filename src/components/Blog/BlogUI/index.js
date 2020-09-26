import React from "react";

import BlogHeader from "./BlogHeader";

function BlogUI(props) {
  return (
    <React.Fragment>
      <BlogHeader config={props.blogHeaderConfig} />
    </React.Fragment>
  );
}

export default BlogUI;
