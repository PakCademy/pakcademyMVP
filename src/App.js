import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCard from './components/BlogCard/BlogCardUI/BlogCardUI';
import BlogCardManager from './components/BlogCard/BlogCardManager/BlogCardManager';

function App() {
  return (
    <div className="App">
      <BlogCardManager />
    </div>
  );
}

export default App;
