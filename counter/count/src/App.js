import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  state = {
    counter: 100,
  };
  addHandler = () => {
    console.log("add");
    this.setState({ counter: this.state.counter + 1 });
  };
  removeHandler = () => {
    console.log("remove");
    if (this.state.counter != 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };
  resetHandler = () => {
    console.log("reset");
    this.setState({ counter: 0 });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even "
        : "odd "
    } circle`;
    return (
      <div>
        <Header />
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
        <Footer />
      </div>
    );
  }
}

export default App;
