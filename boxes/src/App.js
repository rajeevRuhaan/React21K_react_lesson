import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main_router from "./Components/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      {/* <Main /> */}
      <Main_router />

      <Footer />
    </Router>
  );
}

export default App;
