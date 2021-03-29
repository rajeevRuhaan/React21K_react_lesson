import React, { Component } from "react";
import Box from "./Box";

class Main extends Component {
  state = {
    persons: [
      {
        name: "Jon",
        age: 24,
        title: "CEO",
      },
      {
        name: "Cat",
        age: 24,
        title: "Technican",
      },
      {
        name: "Dom",
        age: 24,
        title: "Developer",
      },
    ],
  };

  render() {
    return (
      <main>
        <div>
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />

          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />

          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default Main;
