import React, { Component } from "react";
import Box from "./Box";

class Main extends Component {
  render() {
    return (
      <main>
        <div>
          <Box name="Raj Sah" age="25" title="Teacher" />
          <Box name="John Doe" age="35" title="Doctor" />
          <Box name="Mick jimi" age="45" title="Developer" />
        </div>
      </main>
    );
  }
}

export default Main;
