import React, { Component } from "react";

class Header extends Component {
  currentDate = new Date().toLocaleDateString();
  render() {
    return (
      <nav>
        <div>
          {" "}
          <h2>Counter app </h2>
          <p> (add, remove and reset onClick event of button)</p>
        </div>
        <div>{this.currentDate}</div>
      </nav>
    );
  }
}

export default Header;
