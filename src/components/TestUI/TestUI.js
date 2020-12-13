import React from "react";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./TestUI.scss";

function TestUI(props) {
  return (
    <div style={{ position: "relative" }}>
      <p style={{ fontSize: "24px", marginBottom: "25px" }}>
        {props.question ? props.question.question : "Loading question..."}
      </p>

      <FormGroup style={{ "& *": { fontSize: "20px !important" } }}>
        {props.question.options
          ? props.question.options.map((opt) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={props.checkedOption === opt}
                      onChange={props.handleChange}
                      name={opt}
                      color="primary"
                    />
                  }
                  label={opt}
                />
              );
            })
          : "Loading options..."}
      </FormGroup>
    </div>
  );
}

export default TestUI;
