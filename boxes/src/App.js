import logo from "./logo.svg";
import "./App.css";

const Box = () => {
  return (
    <div className="box">
      <h2>Name: Component</h2>
      <p>Age: some age</p>
      <p>Title: Manager </p>
    </div>
  );
};

function App() {
  return (
    <div>
      <header>
        <h1>Logo</h1>
      </header>
      <main>
        <Box />
        <Box />
        <Box />
        <div className="box">
          <h2>Name: Some name</h2>
          <p>Age: some age</p>
          <p>Title: </p>
        </div>
        <div className="box">
          <h2>Name: Sone name</h2>
          <p>Age: some age</p>
          <p>Title: </p>
        </div>
        <div className="box">
          <h2>Name: Sone name</h2>
          <p>Age: some age</p>
          <p>Title: </p>
        </div>
      </main>
      <footer>@copyright </footer>
    </div>
  );
}

export default App;
