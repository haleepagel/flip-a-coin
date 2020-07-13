import React from "react";
import logo from "./logo512.png";
//import logo from "./logo.svg";
import CoinFlip from "./components/CoinFlip.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Let the coin decide!</p>
      </header>
      <CoinFlip />
      <Footer />
    </div>
  );
}

export default App;
