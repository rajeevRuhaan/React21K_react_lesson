import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxexList extends Component {
  state = {
    persons: [
      {
        name: "Jon",
        age: 24,
        title: "CEO",
      },
      {
        name: "Tom",
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
  handleClick = () => {
    console.log("wow again clicked");
    this.setState({
      persons: [
        {
          name: "Jon",
          age: 24,
          title: "Director",
        },
        {
          name: "Tom",
          age: 24,
          title: "IT",
        },
        {
          name: "Dom",
          age: 24,
          title: "IT",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}> Click Me again </button>
        <div>
          <BoxCard
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />

          <BoxCard
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />

          <BoxCard
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default BoxexList;
