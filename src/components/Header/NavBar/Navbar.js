import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth-service";

const Navbar = (props) => {
  const logout = () => {
    AuthService.logout();
  };
  return (
    <div className="navbar">
      <div className="navbar__right">
        <Link
          to="/"
          className="navbar__right--nav"
          style={{
            color: props.active === "home" ? "#4285F4" : "#000000",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          className="navbar__right--nav"
          style={{
            color: props.active === "subjects" ? "#4285F4" : "#000000",
            textDecoration: "none",
          }}
        >
          Subjects
        </Link>
        <Link
          to="/latest-blogs"
          className="navbar__right--nav"
          style={{
            color: props.active === "blogs" ? "#4285F4" : "#000000",
            textDecoration: "none",
          }}
        >
          Blogs
        </Link>
        <Link
          className="navbar__right--nav"
          style={{
            color: props.active === "trial" ? "#4285F4" : "#000000",
            textDecoration: "none",
          }}
        >
          Trial
        </Link>
      </div>

      {localStorage.getItem("user") ? (
        <div className="navbar__left">
          <Link
            to="/profile"
            className="navbar__left--nav"
            style={{
              color: props.active === "profile" ? "#4285F4" : "#000000",
              textDecoration: "none",
            }}
          >
            PROFILE
          </Link>
          <Link
            to="/"
            className="navbar__left--nav"
            style={{ color: "#000000", textDecoration: "none" }}
            onClick={logout}
          >
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="navbar__left">
          <Link
            to="/login"
            className="navbar__left--nav"
            style={{
              color: props.active === "login" ? "#4285F4" : "#000000",
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="navbar__left--nav-button"
            style={{ textDecoration: "none" }}
          >
            GET STARTED
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
