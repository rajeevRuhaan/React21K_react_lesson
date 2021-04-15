import React from "react";
import "./Circle.css";

const Circle = (props) => {
  return (
    //<div className="circle" style={{backgroundcolor: props.color}}></div>
    <div
      className={`circle ${props.color} ${
        props.active ? "active" : "notactive"
      }`}
      onClick={props.click}
      style={{ pointerEvents: props.disable ? "auto" : "none" }}
    >
      <p>{props.id}</p>
    </div>
  );
};

export default Circle;
