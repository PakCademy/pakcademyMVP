import React from "react";

import LatestBlogsPage from "./components/Pages/Blog/LatestBlogs/LatestBlogs";
import SignupPage from "./components/Pages/User/SingupPage/SIgnupPage";
import LoginPage from "./components/Pages/User/LoginPage/LoginPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import AllBlogs from "./components/Pages/Blog/AllBlogs/AllBlogs";
import ProfilePage from "./components/Pages/User/ProfilePage/ProfilePage";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Route
        path="/profile"
        exact
        render={(props) => <ProfilePage {...props} />}
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
