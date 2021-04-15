import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AnimalList from "./AnimalList";
import BoxexList from "./BoxexList";

const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};
const Gallery = () => {
  return (
    <div>
      <h1>This is gallery page</h1>
    </div>
  );
};
const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/boxes">Boxes</Link>
          </li>
          <li>
            <Link to="/animals">Animals</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/gallery" component={Gallery} />
        <Route path="/boxes" component={BoxexList} />
        <Route path="/animals" component={AnimalList} />
      </Switch>
    </div>
  );
};

export default Main;
