import React from "react";
import "./App.css";
import Rules from "../rules/rules";
import Playfield from "../playfield/playfield";
import logo from "../images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissors</h1>
        <img src={logo} alt="Rock, Paper, Scissors"></img>
      </header>
      <Rules />
      <Playfield />
    </div>
  );
}

export default App;
