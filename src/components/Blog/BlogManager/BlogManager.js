import React, { useState } from "react";

import BlogUI from "../BlogUI";

function BlogManager() {
  const [blogConfig, setBlogConfig] = useState({
    header: {
      imageURL:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      title: "ISSB INITIAL PREPARATION TIPS",
      author: "Haysam Tahir",
      createdOn: "09/26/2020",
    },
  });

  return (
    <React.Fragment>
      <BlogUI blogHeaderConfig={blogConfig.header} />
    </React.Fragment>
  );
}

export default BlogManager;
