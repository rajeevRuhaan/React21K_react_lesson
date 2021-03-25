import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

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
      <header>
        <Header />
        <h1>Logo</h1>
      </header>
      <main>
        <Box name="rajeev Sah" age="25" title="Teacher" />
        <Box name="John Doe" age="35" title="Doctor" />
        <Box name="Mick jimi" age="45" title="Developer" />
      </main>
      <footer>
        <Footer />
        @copyright{" "}
      </footer>
    </div>
  );
}

export default App;
