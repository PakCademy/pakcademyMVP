import React from "react";
import "./TestCardUI.css";

const TestCardUI = (props) => {
  return (
    <div className="test-card">
      <div
        className="test-card__category"
        style={{ backgroundColor: props.color }}
      >
        {props.title}
      </div>
      {props.categories.map((category) => {
        return (
          <React.Fragment>
            <div className="test-card__section">
              <p className="test-card__section--text">{category}</p>
            </div>
            <div className="test-card__section--line"></div>
          </React.Fragment>
        );
      })}
      <button
        className="test-card__button"
        style={{ backgroundColor: props.color }}
      >
        EXPLORE
      </button>
    </div>
  );
};

export default TestCardUI;
