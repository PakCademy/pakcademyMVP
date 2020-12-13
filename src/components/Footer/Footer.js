import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--navigation">
          <div className="footer__container--navigation-block">
            <div className="footer__container--navigation-block-title">
              <h1>SERVICES</h1>
            </div>
            <div className="footer__container--navigation-block-links">
              <a>ISSB PREPARATION</a>
              <a>SUBJECT-WISE-TEST</a>
              <a>COMPREHENSIVE TEST</a>
              <a>DAILY BLOGS</a>
              <a>MENTORSHIP</a>
              <a>PROGRESS RESULT</a>
            </div>
          </div>
          <div className="footer__container--navigation-block">
            <div className="footer__container--navigation-block-title">
              <h1>NOTES</h1>
            </div>
            <div className="footer__container--navigation-block-links">
              <a>ISSB INITIALS</a>
              <a>INTELLIGENCE QUESTIONS</a>
              <a>ENGLISH GRAMMAR</a>
              <a>SCIENCES</a>
              <a>VIEW ALL NOTES</a>
            </div>
          </div>
          <div className="footer__container--navigation-block">
            <div className="footer__container--navigation-block-title">
              <h1>FIND US ON</h1>
            </div>
            <div className="footer__container--navigation-block-links">
              <a>FACEBOOK</a>
              <a>INSTAGRAM</a>
              <a>TWITTER</a>
              <a>YOUTUBE</a>
            </div>
          </div>
        </div>
        <div className="footer__container--navigation-line"></div>
      </div>
    </div>
  );
};

export default Footer;
