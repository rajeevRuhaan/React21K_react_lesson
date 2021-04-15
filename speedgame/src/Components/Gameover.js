import React from "react";
import "./Gameover.css";

const closeHandler = () => {
  window.location.reload();
};
const endGame = (score) => {
  if (score <= 5) {
    return "Your score is less than 5, you can play more to level up!";
  }
  if (score <= 10) {
    return "Your score is less than 10, you can do better!";
  }
  if (score <= 15) {
    return "Your score is less than 15, Good. well done!!";
  }
};
const Gameover = (props) => {
  return (
    <div className="overlay">
      <div className="gameover-box">
        <h2>Game over</h2>
        <p> Your score was: {props.score}</p>
        <p>{endGame(props.score)}</p>
        <button onClick={closeHandler}> X</button>
      </div>
    </div>
  );
};

export default Gameover;
