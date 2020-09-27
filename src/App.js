import React from 'react';

import BlogCardManager from './components/Blog/BlogCard/BlogCardManager/BlogCardManager';
import LatestBlogCard from './components/Blog/LatestBlogCard/LatestBlogCard/LatestBlogCard';
import LatestBlogCardManager from './components/Blog/LatestBlogCard/LatestBlogCardManager/LatestBlogCardManager';

function App() {
  return (
    <div className="App">
      <BlogCardManager />
      {/* <LatestBlogCard /> */}
      <LatestBlogCardManager />
    </div>
  );
}

export default App;
