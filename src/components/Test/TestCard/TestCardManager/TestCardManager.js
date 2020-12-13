import React, { Component } from "react";
import "./TestCardManager.css";
import TestCardUI from "../TestCardUI/TestCardUI";

class TestCardManager extends Component {
  state = {
    testCards: [
      {
        color: "#4285F4",
        title: "INITIALS",
        categories: [
          "INTELLIGENCE",
          "ENGLISH GRAMMAR",
          "PHYSICS",
          "MATHEMATICS",
        ],
      },
      {
        color: "#F44242",
        title: "ISSB",
        categories: ["MEDICAL", "PHYSICAL", "4 DAYS STAY", "WRITTEN"],
      },
      {
        color: "#0F9D58",
        title: "INTERVIEW",
        categories: [
          "GREETING",
          "INTRODUCTION",
          "ADDRESSING QUESTIONS",
          "CONCLUDING",
        ],
      },
    ],
  };

  render() {
    return (
      <div className="test-card-manager">
        <div className="test-card-manager__heading">
          <h1 className="test-card-manager__heading--text">
            SUBJECT-WISE-TESTS
          </h1>
          <div className="test-card-manager__heading--line"></div>
        </div>
        <div className="test-card-manager__tests">
          {this.state.testCards.map((testCard) => {
            return (
              <TestCardUI
                key={testCard.title}
                color={testCard.color}
                title={testCard.title}
                categories={testCard.categories}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TestCardManager;
