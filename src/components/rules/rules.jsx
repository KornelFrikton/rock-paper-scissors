import React from "react";
import "./rules.css";
import rules from "../images/rules.png";

export default function Rules() {
  return (
    <div className="rules">
      <h2>Rules - How to play</h2>
      <div>
        A classic two-person game what now you can play against the computer!
        Start each round by choosing <b>ROCK, PAPER or SCISSORS</b>:
      </div>
      <div className="rulesList">
        <div>
          <img src={rules} alt="Rules"></img>
        </div>
        <div>
          <ul>
            <li>Rock crushes scissors</li>
            <li>Scissors cut paper</li>
            <li>Paper covers rock</li>
          </ul>
        </div>
      </div>
      <h3>Let's play and see who wins each round!</h3>
    </div>
  );
}
