import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title} </p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
