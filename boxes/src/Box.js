import React from "react";

const Box = (props) => {
  const handleClick = () => {
    console.log("WOw");
  };

  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title} </p>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
};

export default Box;
