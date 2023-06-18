import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
var date = new Date(2023, 6, 19, 12);
var date = date.getHours();
let word = " ";
const cssStyle = {};
if (date > 5 && date < 12) {
  word = "Good morning";
  cssStyle.color = "green";
} else if (date >= 12 && date < 18) {
  word = "Good afternoon";
  cssStyle.color = "red";
} else {
  word = "Good night";
}

ReactDOM.render(
  <div>
    <h1 className="R"> Hello Everyone,{date} </h1>
    <h1 className="R">
      {" "}
      Hello Everyone,<span style={cssStyle}> {word} </span>{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
