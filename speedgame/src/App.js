import React, { Component } from "react";
import Circle from "./Components/Circle";
import Gameover from "./Components/Gameover";
import "./App.css";

import startSound from "./assets/sound/rockman9.mp3";
import endSound from "./assets/sound/endGame.mp3";

let gameStartSound = new Audio(startSound);
let gameEndSound = new Audio(endSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    endMessage: "",
    score: 0,
    current: 0,
    showGameOver: false,
    gameStart: false,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
  };

  clickedOnce = false;
  timer = undefined;
  pace = 1600;

  clickHandler = (id) => {
    console.log("wow" + id); //just to print in console

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }
    if (this.state.clickedOnce === false)
      this.setState({
        score: this.state.score + 1,
        rounds: 0,
        clickedOnce: true,
      });
  };

  nextCircle = () => {
    if (this.state.rounds >= 3) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
      clickedOnce: false,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle is :", this.state.current); //to print on console
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  };

  endHandler = () => {
    gameEndSound.play();
    gameStartSound.pause();

    clearTimeout(this.timer);
    this.setState({ showGameOver: true });
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.id}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disable={this.state.gameStart}
        />
      );
    });

    return (
      <div>
        <h1>Speed test: </h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>

        <button onClick={this.startHandler} disable={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <Gameover score={this.state.score} />}
      </div>
    );
  }
}

export default App;
