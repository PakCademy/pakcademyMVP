import React from "react";
import "./HeaderImage.css";
import backgroundPicture from "./HeaderImage.jpg";

const HeaderImage = () => {
  return (
    <div className="header">
      <div
        className="header__image"
        style={{ backgroundImage: "url(" + backgroundPicture + ")" }}
      ></div>
    </div>
  );
};

export default HeaderImage;
