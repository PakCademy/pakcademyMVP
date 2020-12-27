import React from "react";

import BlogManager from "./components/Blog/BlogManager";
import LatestBlogsPage from "./components/Pages/Blog/LatestBlogs/LatestBlogs";
import Result from "./components/Result";
import SignupPage from "./components/Pages/User/SingupPage/SIgnupPage";
import LoginPage from "./components/Pages/User/LoginPage/LoginPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import AllBlogs from "./components/Pages/Blog/AllBlogs/AllBlogs";
import ProfilePage from "./components/Pages/User/ProfilePage/ProfilePage";
import Test from "./containers/Test";
import BlogWriter from "./components/Blog/BlogWriter";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      {/*<BlogManager />*/}
      <Route path="/blog/:id" render={(props) => <BlogManager {...props} />} />
      <Route
        path="/create-blog"
        render={(props) => <BlogWriter {...props} />}
      />
      <Route
        path="/update-blog/:id"
        render={(props) => <BlogWriter edit={true} {...props} />}
      />
      <Route path="/test" exact render={(props) => <Test {...props} />} />
      <Route
        path="/profile"
        exact
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/result/:score/:total"
        render={(props) => {
          return <Result {...props} />;
        }}
      />
      <Route path="/" exact render={(props) => <HomePage {...props} />} />
      <Route
        path="/signup"
        exact
        render={(props) => <SignupPage {...props} />}
      />
      <Route path="/login" exact render={(props) => <LoginPage {...props} />} />
      <Route
        path="/latest-blogs"
        exact
        render={(props) => <LatestBlogsPage {...props} />}
      />
      <Route
        path="/blogs/:topic"
        exact
        render={(props) => <AllBlogs {...props} />}
      />
    </div>
  );
}

export default App;
