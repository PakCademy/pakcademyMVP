import React, { useEffect, useState } from "react";
import Navbar from "../Header/NavBar/Navbar";

function Result(props) {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setScore(props.match.params.score);
    setTotal(props.match.params.total);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "25%",
          transform: "translateX(-50%)",
          left: "50%",
          width: "50%",
          height: "125px",
          border: "1px solid green",
          borderRadius: "8px",
          fontSize: "40px",
          fontFamily: "Roboto",
          color: "#4285f4",
          textAlign: "center",
          padding: "5%",
        }}
      >
        <div style={{}}>
          <span style={{ color: "green" }}>{score}</span> Correct out of {total}
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
            marginBottom: "16px",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => props.history.push("/")}
        >
          Go to Home Page
        </button>
      </div>
    </React.Fragment>
  );
}

export default Result;
