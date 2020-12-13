import React from "react";

import ThemeContext from  '../../../Contexts/ThemeContext';

import "./style.scss";

function DotList(props) {

  const theme = React.useContext(ThemeContext);

  return (
    <ul style={{color: props.theme ? theme[props.theme].color : 'inherit'}} className="py-dot-list py-fnt-s--1p4 py-fnt-w--bold">
      {props.items.map((item) => {
        return (
          <li key={item} className="py-dot-list--item">
            <span className="blog-authored--author">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default DotList;
