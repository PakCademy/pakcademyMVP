import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./Test.scss";

import TestUI from "../../components/TestUI";

function Test() {
  const [questionnaire, setQuestionnaire] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answerSheet, setAnswerSheet] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  useEffect(() => {
    const questionnaire_snap = [
      {
        questionId: 1,
        question: "What is your name?",
        options: ["Haysam", "Muzami", "Adil", "Ali Hamza"],
      },
      {
        questionId: 2,
        question: "What was your first pet name?",
        options: ["Jack", "Raxi", "Rax", "Whistles"],
      },
    ];

    setQuestionnaire([...questionnaire_snap]);
    let answerSheetSnap = [];
    questionnaire_snap.forEach((q, i) => {
      answerSheetSnap.push({
        option: "__",
        questionId: q.questionId,
        index: i,
      });
    });
    setAnswerSheet([...answerSheetSnap]);
  }, []);

  const handleAnswer = (e) => {
    let answersCopy = _.cloneDeep(answerSheet);
    answersCopy[activeQuestionIndex].option = e.target.name;
    setAnswerSheet([...answersCopy]);
    let skippedQuestionsCopy = [];
    skippedQuestions.forEach((sq) => {
      if (!(sq === activeQuestionIndex)) {
        skippedQuestionsCopy.push(sq);
      }
    });
    setSkippedQuestions([...skippedQuestionsCopy]);
  };

  const handleNext = (skip = false) => {
    if (activeQuestionIndex < questionnaire.length - 1) {
      if (!skip) {
        setActiveQuestionIndex(
          (prevActiveQuestionIndex) => prevActiveQuestionIndex + 1
        );
      } else {
        let answersCopy = _.cloneDeep(answerSheet);
        answersCopy[activeQuestionIndex].option = "__";
        setAnswerSheet([...answersCopy]);
        if (!skippedQuestions.includes(activeQuestionIndex)) {
          let skippedQuestionsCopy = [...skippedQuestions];
          skippedQuestionsCopy.push(activeQuestionIndex);
          setSkippedQuestions([...skippedQuestionsCopy]);
        }

        setActiveQuestionIndex(
          (prevActiveQuestionIndex) => prevActiveQuestionIndex + 1
        );
      }
    } else if (activeQuestionIndex == questionnaire.length - 1 && skip) {
      if (!skippedQuestions.includes(activeQuestionIndex)) {
        let skippedQuestionsCopy = _.cloneDeep(skippedQuestions);
        skippedQuestionsCopy.push(activeQuestionIndex);
        setSkippedQuestions([...skippedQuestionsCopy]);
      }
    }
  };
  const handlePrevious = (skip = false) => {
    if (activeQuestionIndex != 0)
      setActiveQuestionIndex(
        (prevActiveQuestionIndex) => prevActiveQuestionIndex - 1
      );
  };
  const handleJump = (index) => {
    setActiveQuestionIndex(index);
  };

  return (
    <div className="test">
      <div className="test-column"></div>
      <div className="test-column test-column--middle">
        <div className="test-header">
          <div className="test-header--topic">
            <h3 className="test-header--topic-text">English composition</h3>
          </div>
          <div className="test-header--submit">
            <button>Submit</button>
          </div>
          <div className="test-header--timer">
            <div className="test-header--timer-box">
              <div className="test-header--timer-box--title">
                <p>Time remaining</p>
              </div>
              <div className="test-header--timer-box--time">
                <p>00:25:49</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          className="test-column--middle-question-box"
        >
          <div className="test-column--middle-question-box--head">
            <div
              style={{
                padding: "2px 16px 4px 25px",
                border: "1px solid #4285f4",
                borderLeft: 0,
                borderTopRightRadius: "100px",
                borderBottomRightRadius: "100px",
                fontWeight: "bold",
                color: "#4285f4",
                fontSize: "16px",
                backgroundColor: "#fff",
              }}
            >
              Question {activeQuestionIndex + 1}
            </div>
            <button onClick={() => handleNext(true)}>
              {" "}
              Skip this question
            </button>
          </div>
          <div className="test-column--middle-question-box--body">
            <div style={{ paddingLeft: "25px" }}>
              <TestUI
                question={
                  questionnaire.length > 0
                    ? questionnaire[activeQuestionIndex]
                    : "Loading Question..."
                }
                checkedOption={
                  answerSheet.length > 0
                    ? answerSheet[activeQuestionIndex].option
                    : "__"
                }
                handleChange={handleAnswer}
                handleNext={handleNext}
              />
            </div>
          </div>
          <div className="test-column--middle-question-box--actions">
            <div
              style={{
                position: "absolute",
                bottom: "25px",
                transform: "translateX(-50%)",
                left: "50%",
              }}
            >
              <button
                style={{
                  background: "#4285f4",
                  border: "1px solid #4285f4",
                  color: "#ffffff",
                  padding: "7px 18px",
                  borderRadius: "4px",
                  fontFamily: "Roboto",
                  marginRight: "15px",
                  fontSize: "15px",
                  transition: "transform .2s ease-out",
                  transform: "scale(1)",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                onClick={handlePrevious}
                disabled={activeQuestionIndex == 0}
              >
                Previous
              </button>
              <div
                style={{
                  padding: "7px 18px",
                  border: "1px solid #DDDFED",
                  display: "inline-block",
                  marginRight: "15px",
                  fontSize: "15px",
                  fontFamily: "Roboto",
                  borderRadius: "4px",
                  color: "#4285f4",
                }}
              >
                {activeQuestionIndex + 1} /{" "}
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {questionnaire.length}
                </span>
              </div>
              <button
                style={{
                  background: "#4285f4",
                  border: "1px solid #4285f4",
                  color: "#ffffff",
                  padding: "7px 18px",
                  borderRadius: "4px",
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  transform: "scale(1)",
                  transition: "transform .2s ease-out",
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
                onClick={() => handleNext(false)}
                disabled={
                  activeQuestionIndex >= questionnaire.length - 1 ||
                  (answerSheet.length > 0
                    ? answerSheet[activeQuestionIndex].option == "__"
                    : true)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="test-column">
        <div
          style={{
            marginTop: "206px",
            height: "425px",
            border: "1px solid #dddfeb",
            borderRadius: "8px",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            boxSizing: "border-box",
            padding: "15px 0",
            paddingBottom: "0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "30%" }}>
            <h2 style={{ textAlign: "center" }}>
              Jump to all <span style={{ color: "red" }}>skipped</span>{" "}
              questions
            </h2>
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                fontFamily: "Roboto",
                padding: "0 14px",
                textAlign: "center",
                marginBottom: "14px",
              }}
            >
              Select, among the following unanswered questions, to return to
              that question.{" "}
            </p>
          </div>
          <div
            style={{
              height: "70%",
              background: "#FAFAFA",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              boxShadow: "0 -3px 6px rgba(0,0,0,.16)",
              maxHeight: "70%",
              overflowY: "auto",
              padding: "16px 14px",
            }}
          >
            {skippedQuestions.length > 0
              ? skippedQuestions.map((sq) => (
                  <button
                    key={sq}
                    style={{
                      background: "#4285f4",
                      border: "1px solid #4285f4",
                      color: "#ffffff",
                      padding: "7px 18px",
                      borderRadius: "4px",
                      fontFamily: "Roboto",
                      fontSize: "15px",
                      transform: "scale(1)",
                      transition: "transform .2s ease-out",
                      marginBottom: "16px",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() => handleJump(sq)}
                  >
                    Jump to Quesstion {sq + 1}
                  </button>
                ))
              : "No Skipped Questions"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
