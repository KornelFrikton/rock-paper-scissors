import React, { useState, useEffect } from "react";
import "./playfield.css";
import rock_user from "../images/rock_user.png";
import paper_user from "../images/paper_user.png";
import scissors_user from "../images/scissors_user.png";

export default function Playfield() {
  const [userHand, setUserHand] = useState("");
  const [compHand, setCompHand] = useState("Rock");
  const [winner, setWinner] = useState("");

  const [rockClass, setRockClass] = useState(true);
  const [paperClass, setPaperClass] = useState(true);
  const [scissorsClass, setScissorsClass] = useState(true);
  const [compClass, setCompClass] = useState(false);
  const [titleClass, setTitleClass] = useState(true);
  const [winnerClass, setWinnerClass] = useState(false);

  const image = require(`../images/${compHand}_comp.png`);

  const rockIcon = rockClass ? "showClass" : "hideClass";
  const paperIcon = paperClass ? "showClass" : "hideClass";
  const scissorsIcon = scissorsClass ? "showClass" : "hideClass";
  const compIcon = compClass ? "showClass" : "hideClass";
  const title = titleClass ? "title" : "hideClass";
  const winnerTitle = winnerClass ? "winner" : "hideClass";

  const generateCompHand = () => {
    const comp = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return comp[i];
  };

  useEffect(() => {
    if (titleClass) setCompHand(generateCompHand());
  }, [titleClass]);

  const whoWin = () => {
    if (userHand === "Rock" && compHand === "Scissors") {
      setWinner("You win!");
    } else if (userHand === "Rock" && compHand === "Paper") {
      setWinner("You lose!");
    } else if (userHand === "Scissors" && compHand === "Paper") {
      setWinner("You win!");
    } else if (userHand === "Scissors" && compHand === "Rock") {
      setWinner("You lose!");
    } else if (userHand === "Paper" && compHand === "Rock") {
      setWinner("You win!");
    } else if (userHand === "Paper" && compHand === "Scissors") {
      setWinner("You lose!");
    } else {
      setWinner("It's a draw");
    }
  };

  useEffect(() => {
    if (compClass) {
      whoWin();
      setTitleClass(false);
      setWinnerClass(true);
    }
    // eslint-disable-next-line
  }, [compClass]);

  const handleRock = () => {
    setUserHand("Rock");
    setPaperClass(false);
    setScissorsClass(false);
    setCompClass(true);
  };

  const handlePaper = () => {
    setUserHand("Paper");
    setRockClass(false);
    setScissorsClass(false);
    setCompClass(true);
  };

  const handleScissors = () => {
    setUserHand("Scissors");
    setRockClass(false);
    setPaperClass(false);
    setCompClass(true);
  };

  const handleReset = () => {
    setRockClass(true);
    setPaperClass(true);
    setScissorsClass(true);
    setCompClass(false);
    setTitleClass(true);
    setWinnerClass(false);
    setUserHand("");
  };

  return (
    <div>
      <h2 className={title}>Please choose your hand:</h2>
      <h2 className={winnerTitle}>{winner}</h2>
      <div className="playfield">
        <div className={rockIcon}>
          <h3>Rock</h3>
          <input type="image" src={rock_user} alt="Rock" onClick={handleRock} />
        </div>
        <div className={paperIcon}>
          <h3>Paper</h3>
          <input
            type="image"
            src={paper_user}
            alt="Paper"
            onClick={handlePaper}
          />
        </div>
        <div className={scissorsIcon}>
          <h3>Scissors</h3>
          <input
            type="image"
            src={scissors_user}
            alt="Scissors"
            onClick={handleScissors}
          />
        </div>
        <div className={compIcon}>
          <h3>{compHand}</h3>
          <input type="image" src={image} alt={`${compHand}`} />
        </div>
      </div>
      <div className="resetButton">
        <button type="reset" onClick={handleReset}>
          Play again
        </button>
      </div>
    </div>
  );
}
